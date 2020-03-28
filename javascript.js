function genGrid (dimension) {
    for (i=0; i<dimension**2; i++) {
        var div = document.createElement("div");
        div.style.height = `${98.0/dimension}%`;
        div.style.width = `${98.0/dimension}%`;
        div.id = `div${i}`;
        div.className = "sketchElement";
        div.style.backgroundColor = "#ed493e";
        div.setAttribute('data-colour', 100)
        div.addEventListener("mouseover", darken);
        document.getElementById("container").appendChild(div);
    }
}

let rgbColour = 100
document.getElementById("custom-size-button").addEventListener("click", getSize);
genGrid(16)
function darken () {
    //this.style.backgroundColor = "black";
    let currentColourPcnt = parseInt(this.getAttribute('data-colour'));
    this.setAttribute('data-colour', currentColourPcnt - 10);
    this.style.backgroundColor = `rgb(${currentColourPcnt * 2.55}, ${currentColourPcnt * 2.55}, ${currentColourPcnt * 2.55})`;
}

function getSize() {
    let dimension = prompt("Please enter a number between 0 and 100. If you enter 64, the grid dimension will be 64x64.")
    console.log(parseInt(dimension));
    if (!(parseInt(dimension)) || (dimension < 1 || dimension > 99)) {
        alert("Please enter a valid number");
        getSize();
    } else genGrid(dimension);
}
