let numberBottles = Number(prompt("please give me a number to start counting down from"));
let takeDown = 1;

while (numberBottles > 0){
    const lyrics = makeLyrics(numberBottles, takeDown)
    console.log(lyrics);
    numberBottles -= takeDown;
    takeDown++;
}

console.log("No more bottles of beer on the wall, no more bottles of beer.");

function makeLyrics(num, counter){
    const bottleOrBottles = getBottleOrBottles(num);
    const lyrics = `${num} ${bottleOrBottles} of beer on the wall 
    ${num} ${bottleOrBottles} of beer 
    take ${counter} down, pass it around 
    ${num - counter} ${getBottleOrBottles(num - counter)} of beer on the wall`;

    return lyrics;
}


function isPlural(num){
    if (num > 1){
        return true;
    } else {
        return false;
    }
}

function getBottleOrBottles(num){
    if (isPlural(num)){
        return "bottles";
    } else {
        return "bottle";
    }
}

//console.log(lyrics);

