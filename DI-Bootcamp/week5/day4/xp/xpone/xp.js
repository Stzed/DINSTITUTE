// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));




// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

async function getStarshipdata(){
    const response = await fetch("https://www.swapi.tech/api/starships/9/")
    const jsonResult = await response.json()
    console.log(jsonResult);
}
getStarshipdata()