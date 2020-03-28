function genGrid (dimension = 16) {
    for (i=0; i<dimension**2; i++) {
        var div = document.createElement("div");
        div.style.height = `${98.0/dimension}%`;
        div.style.width = `${98.0/dimension}%`;
        div.id = `div${i}`;
        div.className = "sketchElement";
        div.style.backgroundColor = "#ed493e";
        div.setAttribute('data-colour', 100)
        div.addEventListener("mouseover", darkenElements);
        document.getElementById("container").appendChild(div);
    }
}

let rgbColour = 100
document.getElementById("custom-size-button").addEventListener("click", getSize);
document.getElementById("grayscale-button").addEventListener("click", setDarken);
document.getElementById("colourful-button").addEventListener("click", setColourful);

function darkenElements () {
    //this.style.backgroundColor = "black";
    
    let currentColourPcnt = parseInt(this.getAttribute('data-colour'));
    this.setAttribute('data-colour', currentColourPcnt - 10);
    this.style.backgroundColor = `rgb(${currentColourPcnt * 2.55}, ${currentColourPcnt * 2.55}, ${currentColourPcnt * 2.55})`;
}

function colourfulElements () {
    let currentColourPcnt = parseInt(this.getAttribute('data-colour'));
    this.setAttribute('data-colour', 100);
    this.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

function setDarken () {
    
    let elements = document.getElementsByClassName("sketchElement");
    console.log(elements);
    for(var i=0; i<elements.length; i++) {
        elements[i].removeEventListener("mouseover", colourfulElements);
        elements[i].addEventListener("mouseover", darkenElements)
      
    };
}

function setColourful () {
    let elements = document.getElementsByClassName("sketchElement");
    for(var i=0; i<elements.length; i++) {
        elements[i].removeEventListener("mouseover", darkenElements);
        elements[i].addEventListener("mouseover", colourfulElements)
      
    };
}

function getSize() {
    let dimension = prompt("Please enter a number between 0 and 100. If you enter 64, the grid dimension will be 64x64.")
    console.log(parseInt(dimension));
    if (!(parseInt(dimension)) || (dimension < 1 || dimension > 99)) {
        alert("Please enter a valid number");
        getSize();
    } else {
        let elements = document.querySelectorAll('.sketchElement');
        elements.forEach((element)=>{
           element.remove();
        });
        genGrid(dimension);
    }
}

genGrid(16)