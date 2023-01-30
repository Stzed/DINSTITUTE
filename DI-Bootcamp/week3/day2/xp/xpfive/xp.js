// Exercise 5 : Event Listeners
// Instructions
// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

// added     <button id="mytButton">Check me out :)</button>    to my html file

const button = document.getElementById("myButton");

button.addEventListener("click", changePositionX);
button.addEventListener("mouseover", changePositionY);
button.addEventListener("mouseout", changeColor);
button.addEventListener("dblclick", changeFontSize);

let y = 0;
let x = 0;
let colorIndex = 0;
let colors = ["red", "blue", "green", "yellow"]
let fontSize = 20;

function changePositionX() {
    x += 40;
    button.style.padding = x + "px";
}

function changePositionY(){
    y += 10;
    button.style.padding = y + "px";
}

function changeColor(){
    colorIndex = (colorIndex + 1) % colors.length;
    button.style.backgroundColor = colors[colorIndex];
}

function changeFontSize(){
    fontSize +=100
    button.style.fontSize = fontSize + "px"
}

console.log(button);