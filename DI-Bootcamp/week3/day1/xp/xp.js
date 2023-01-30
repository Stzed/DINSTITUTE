// 🌟 Exercise 1 : Users
// Instructions
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//  <li>Dan</li>
// </ul>  


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// Delete the <li> that contains the text node “Sarah”.

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.


// //exercise 1
// const div = document.getElementById("container")
// console.log(div);

// const pete = document.getElementsByClassName("list")[0]
// const second = pete.children[1]
// console.log(second);
// const richard = second.textContent = "Richard"
// console.log(richard)

// const changeOne = document.getElementsByClassName("list")[0]
// const changeTwo = document.getElementsByClassName("list")[1]
// const changeLiOne = changeOne.children[0]
// const changeLiTwo = changeTwo.children[0]
// const finalChangeOne = changeLiOne.textContent = "Esti"
// const finalChangeTwo = changeLiTwo.textContent = "Esti"
// console.log(finalChangeOne);
// console.log(finalChangeTwo);

// const lists = document.querySelectorAll(".list")
// lists[1].children[1].remove()













// 🌟 Exercise 2 : Users And Style
// Instructions
// <div>Users:</div>
// <ul>
//     <li>John</li>
//     <li>Pete</li>
// </ul>


// Add the code above, to your HTML file

// Add a “light blue” background color and some padding to the <div>.

// Do not display the <li> that contains the text node “John”.

// Add a border to the <li> that contains the text node “Pete”.

// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


////exercise 2

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body style="font-size: 100px;">
//     <div style="background-color:lightblue; padding: 4px;">Users:</div>
//     <ul id="list">
//         <li>John</li>
//         <li style="border:4px solid black;">Pete</li>
//     </ul>

//     <script src="xp.js"></script>
// </body>
// </html>

// document.getElementById("list").children[0].style.display = "none";




















// 🌟 Exercise 3 : Change The Navbar
// Instructions
/* <div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div> */


// Add the code above, to your HTML file

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

// //exercise 3
// const nav = document.getElementById("navBar")
// nav.setAttribute("id" , "socialNetworkNavigation")

// const li = document.createElement("li")
// const logout = document.createTextNode("logout")
// li.append(logout)
// const ul = document.querySelector("ul")
// ul.appendChild(li)



















// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.
// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

// //exercise 4
const books = []
const bookOne = {
    title: "Harry Potter",
    written: "Written By",
    author: "JK Rowling",
    image: "https://picsum.photos/200",
    alreadyRead : true
} 

const bookTwo = {
    title: "Loard of the rings",
    written: "Written By", 
    author: "Tolien",
    image: "https://picsum.photos/200", 
    alreadyRead : false
}

books.push(bookOne, bookTwo);
console.log(books);


const table = document.createElement("Table")
const node = document.createTextNode("This is a table of books.")
table.appendChild(node)
const div = document.querySelector(".listBooks");
div.appendChild(table);
console.log(div);

books.forEach(book => {
    const row = document.createElement("tr");
    table.appendChild(row);

    const title = document.createElement("td");
    title.innerHTML = book.title;
    row.appendChild(title);

    const written = document.createElement("td");
    written.innerHTML = book.written;
    row.appendChild(written);

    const author = document.createElement("td");
    author.innerHTML = book.author;
    row.appendChild(author);

    const image = document.createElement("td");
    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";
    image.appendChild(img);
    row.appendChild(image);

    if (book.alreadyRead) {
        title.style.color = "red";
        written.style.color = "red";
        author.style.color = "red"; 
    } else {
        title.style.color = "lightblue";
        written.style.color = "lightblue";
        author.style.color = "lightblue";
    }
}

   );
// :)


