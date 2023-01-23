const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object
userCart["lastName:"] =  "Smith"
console.log(userCart)

// 2. Change the username from John to Tom
userCart ["username"] = "tom"
console.log(userCart)


// 2. Change the price of the pear, so it will include the Taxes. (17% is 0.17)
userCart["prices"]["pear"] *= 1.17
console.log(userCart)

// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
const userChoise = prompt("what fruit do you want?").toLowerCase();
console.log(userChoise);

// 4. Console.log the price for the specific fruit the user wants
const value = userCart["prices"][userChoise];
console.log(`the price of ${userChoise} is ${value} dollars`);

// console.log(userCart["prices"]["pear"]);
// console.log(userCart["prices"]["apple"]);
// console.log(userCart["prices"]["banana"]);
{sellerAccountId: 'A1ALKUDXUQIPFD' , 
purchaseDate: {"$gte":ISODate('2023-01-17T03:08:00Z'),"$lt":ISODate('2023-01-17T03:10:00Z')}
}