// 🌟 Exercise 2 : Giphy API
// Instructions
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object


const url = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2"

const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.addEventListener("load" , logReq)
xhr.open("GET", url);
xhr.send();

function logReq(e){
    const response = JSON.parse(xhr.response);
    console.log(response);
}

