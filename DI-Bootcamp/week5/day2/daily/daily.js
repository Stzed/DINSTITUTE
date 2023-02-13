// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const url = " https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1";
const input = document.getElementById("search");
const form = document.querySelector("form");
const container = document.getElementById("container")
const deleteAllBtn = document.getElementById("deleteAll");

form.addEventListener("submit", handleSubmit);
deleteAllBtn.addEventListener("click", deleteAll)

function deleteAll(){
    container.innerHTML = "";
}

function handleSubmit(e){
    e.preventDefault();
    const searchterm = input.value;
    input.value = "";
    gifsFromSearch(searchterm);
}

function gifsFromSearch(word){
    const url = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`;
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("load", logRequest)
    xhr.open("GET", url)
    xhr.send()
}

function logRequest(e){
    const response = JSON.parse(e.target.response);
    const first = response.data[0];
    const imgUrl = first.images.fixed_width.webp;
    const altText = first.title;
    createImage(imgUrl);

    console.log(imgUrl);
}


function createImage(url){
    const div = document.createElement("div"); 
    const img = document.createElement("img");
    const button = document.createElement("button");

    button.textContent = "delete";
    button.addEventListener("click", removeParentdiv)

    img.src = url;
    container.prepend(div);
    div.prepend(img);
    div.prepend(button);
}

function removeParentdiv(e){
    console.log(e.target);
    const parentDiv = e.target.parentElement;
    parentDiv.remove();
}