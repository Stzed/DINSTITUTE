// 🌟 Exercise 1: Timer
// Instructions

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.


function alertHello(){
    alert("hello world")
}

const myFirstTimeout = setTimeout(alertHello, 2000)

function run(){
    clearTimeout(myFirstTimeout)
}

const mySecondTimeout = setTimeout(addP, 2000)

function addP(){
    const p = document.createElement("p")
    p.textContent= "hello world"
    const container = document.getElementById("container")
    if(container.children.length <= 5){
        container.appendChild(p)
    }
}


const interval = setInterval(addP, 2000) 
const btn = document.getElementsByTagName("button")
document.body.addEventListener("click", clearPInterval)

function clearPInterval(){
    clearInterval(interval)
}
