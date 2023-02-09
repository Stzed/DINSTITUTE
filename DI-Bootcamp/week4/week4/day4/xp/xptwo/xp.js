// 🌟 Exercise 2: Display Student Info
// Instructions


function displayStudentInfo(objUser){
    const {first , last} = objUser
    return `Your full name is ${first} ${last}` ;
}

firstlast = displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(firstlast);

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'

