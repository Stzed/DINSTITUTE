function isAnagram (sentence1, sentence2){
    const str1 = sentence1.toLowerCase().split(" ").join("");
    const str2 = sentence2.toLowerCase().split(" ").join("");
    console.log(str1, str2);
    if (str1.length != str2.length)  return false;

    const total = {};
    for (const letter of str1) {
        total[letter] = total[letter] +1 || 1
    } 
    for (const letter of str2) {
        total[letter] = total[letter] ? total[letter] -1 : 1;
    }
    const differences = Object.values(total);
    return differences.some((num) => num === 0);
}


const result1 = isAnagram("low" , "o Wl");
const result2 = isAnagram("bird" , "GIFDJ");
console.log("result1", result1);
console.log("result2", result2); 