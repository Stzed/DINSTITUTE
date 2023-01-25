const maxNumber = 6
let stars = ""



for (let i = 0; i < maxNumber; i++) {
    stars = stars + " * "
    console.log(stars);
}

for (let i = 0; i < maxNumber; i++) {
    const numberStars = i+1
    let lineStars = " "
    for (let j = 0; j < numberStars; j++){
        lineStars = lineStars + "*"
    }
    console.log(lineStars);
}