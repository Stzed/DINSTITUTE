function playTheGame(){
    const question = prompt("would you like to play the game?")
    if (confirm("Press a button!") == true) {
        const answerOk = prompt("please enter a number between 0 and 10")
        let compNumber = Math.floor(Math.random() *11)
        if (answerOk > 10 && answerOk < 0)
        if (answerOk  = compNumber){
        alert("great job")
    }  
    else if (answerOk) {
    prompt("another number")
    }
    else {
        console.log(text = "No problem, Goodbye");
      }
    }
}

function compareNumbers(answerOk,compNumber) {
    if (answerOk === compNumber){
        alert("winner!")
    } else if (answerOk > compNumber) {
        alert("Your number is bigger then the computer's, guess again")
        prompt("guess again")
    } else if (answerOk < compNumber) {
        alert("Your number is smaller then the computer's, guess again")
        prompt("guess again")
    } for(answerOk = 3; answerOk < 3; answerOk-- ){
        alert("you ran out of guesses :( ")
    }
}


playTheGame()
compareNumbers()