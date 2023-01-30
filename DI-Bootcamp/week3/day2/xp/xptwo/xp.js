// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

const form = document.querySelector("form")
console.log(form);

// const fname = document.getElementById("fname")
// console.log(fname);
// const lname = document.getElementById("lname")
// console.log(lname);



function logFormInputs(event){
    event.preventDefault();
    const firstName = document.querySelector("[name=fname]").value; 
    const lastName = document.querySelector("[name=lname]").value;  
    console.log("event", event);
    if(firstName==="" || lastName==="" ){
        alert("please fill in all form")
    } else {
        const ul = document.querySelector(".usersAnswer");
        const liFirst = document.createElement("li");
        const liLast = document.createElement("li") ;
        liFirst.innerText = firstName;
        liLast.innerText = lastName;
        ul.appendChild(liFirst);
        ul.appendChild(liLast);
    }
}

form.addEventListener("submit",logFormInputs)






