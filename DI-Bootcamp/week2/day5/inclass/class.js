// function findSecretSociety(){
//     const students = ["jack", "philip", "sarah", "amanda", "bernard", "kyle"];
//     const userName = students[2];
//     const firstLetter = userName[1];
//     console.log(firstLetter);
//     students.sort()
//     console.log(students);

//     let secrestSociety = "";
//     for (let user of students) {
//         const firstLetter = user[0];
//         secrestSociety += firstLetter;
//     }

// console.log(secrestSociety);
// }
// findSecretSociety ()


// function raindeerSentence(){
//     const details = {
//         my: 'name',
//         is: 'rudolf',
//         the: 'raindeer'
//     }

//     let sentence = "";

//     for (let key in details){
//         console.log(key);
//         console.log(details[key]);
//         sentence += `${key} ${details[key]} `
//     }
//     console.log(sentence);
// }

// raindeerSentence()

const answerUser = prompt("whats your language?").toLowerCase();

// if (answerUser === "french"){
//     console.log("bonjour");
// } else if(answerUser === "english") {
//     console.log("hello");
// } else if (answerUser === "hebrew"){
//     console.log("shalom");
// } else {
//     console.log("hmm interesting");
// } 


// strict comparison
switch (answerUser){
    case "french":
        console.log("bonjour");
        break
    case "english":
        console.log("hello");
        break
    case "hebrew":
        console.log("shalom");
        break
}
