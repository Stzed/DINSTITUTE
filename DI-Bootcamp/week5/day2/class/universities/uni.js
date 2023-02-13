const uni = new XMLHttpRequest();

const button = document.querySelector("button");
button.addEventListener("click", makeRequest);

function makeRequest() {
    uni.open("get", "http://universities.hipolabs.com/search");
    uni.send();
}

uni.onload = function () {
    console.log(uni);
    if (uni.status !== 200) {
        console.log("error");
    } else {
        const data = JSON.parse(uni.response);
        displayUni(data);
        console.log(data);
    }
}

uni.onprogress = function (event) {
    let percentComplete = parseInt((event.loaded / event.total) * 100);
    console.log("Upload: " + percentComplete + "% complete");
}

uni.onerror = function () {
    console.log("error, please make sure page exists, and you have internet connection");
}

const section = document.getElementById("container");

function displayUni(allUni) {
    allUni.forEach(element => {
        const {
            name,
            web_pages : [web]
        } = element
        
        const card = document.createElement("div");
        card.classList.add("universities");
        const nameR = document.createElement("p");
        const addressR = document.createElement("p");
        const textName = document.createTextNode(name);
        const textAddress = document.createTextNode(web);
        nameR.appendChild(textName);
        addressR.appendChild(textAddress);

        card.appendChild(nameR);
        card.appendChild(addressR);

        document.body.appendChild(card);
    });
}