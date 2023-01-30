// Exercise 1 - basic addEventListener
// Create two buttons - id of "red", id of "blue"
// When we click on the red button -> Change the backgroundcolor of the page to red
// When we click on the blue button -> Change the backgroundcolor of the page to blue

// Exercise 2 - using the event object
// const colors = ["blue", "yellow", "green", "pink"];

// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// Using a loop, add one button per color inside the div container (do it directly in the JS)
// Each button should have an "click" event listener that changes the background color of the document, to the color of the
// button (do it directly in the JS)



// // //exercise 1
// const redButton = document.getElementById("red");
// const blueButton =  document.getElementById("blue");

// redButton.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red";
// });
// blueButton.addEventListener("click", function(){
//     document.body.style.backgroundColor = "blue";
// });

// console.log(redButton);
// console.log(blueButton);



//exercise 2
const colors = ["blue", "yellow", "green", "pink"];
const container = document.getElementById("container");

for (let i = 0; i < colors.length; i++){
    const button = document.createElement("button");
    button.innerHTML = colors[i];
    container.appendChild(button)

    button.addEventListener("click", function(event){
        document.body.style.backgroundColor = event.target.innerHTML;
    }
     );
};
console.log(colors);
console.log(container);
