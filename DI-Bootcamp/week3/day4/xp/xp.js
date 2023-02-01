let colorsPallet = ["red", "orangered", "orange", "yellow", "yellowgreen", "lightgreen", "green", "turquoise", "cyan", "lightskyblue", "dodgerblue", "blue", "darkblue", "indigo", "darkmagenta", "violet", "lightpink", "lightgray", "gray", "black", "white"];
let sideBar = document.getElementsByClassName("sectionSidebar");
let fillBlocks = document.getElementsByClassName("sectionMain");
let colorBlocks = document.querySelectorAll(".sectionSidebar > div");
let clearButton = document.getElementsByClassName("btn");
let body = document.getElementsByTagName("body")[0];


for (let i=0; i < colorsPallet.length; i++){
    const div = document.createElement("div");
    div.style.backgroundColor = colorsPallet[i];
    sideBar[0].appendChild(div);
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.display = "inline-block";
    div.style.margin = "10px";
    div.style.textAlign = "center";
}

fillBlocks.addEventListener("mousedown", function(){
    mousedown = true;
});

fillBlocks.addEventListener("mouseover", function(){
    mousedown = false;
});

body.addEventListener("mousedown", function(){
    mousedown = true;
})

body.addEventListener("mouseover", function(){
    mousedown = false;
})
function retrieveColor(event){
    color = event.target.style.backgroundColor;
}

sideBar[0].addEventListener("click", retrieveColor);

for (let i = 0; i < colorBlocks.length; i++){
    colorBlocks[i].addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    })
}

for(let i = 0; i < fillBlocks.length; i++ ){
    fillBlocks[i].addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color;
    }); fillBlocks[i].addEventListener("mouseover", function(event){
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}

clearButton[0].addEventListener("click", function(){
    for (let i = 0; i < fillBlocks.length; i++) {
        fillBlocks[i].style.backgroundColor = " ";
    }
});


clearButton[0].addEventListener("click", function(){
    for (let i = 0; i < fillBlocks.length; i++) {
        fillBlocks[i].style.backgroundColor = " ";
    }
});


