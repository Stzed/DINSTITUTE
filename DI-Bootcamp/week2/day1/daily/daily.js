// Instructions
// Exercise 1:
// Using this array :

// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove Banana from the array.

delete fruits [0];
console.log(fruits);

// Sort the array in alphabetical order.

fruits.sort ();
console.log(fruits);

// Add “Kiwi” to the end of the array.

fruits.push ("kiwi");
console.log(fruits);

// Remove “Apples” from the array. Don’t use the same method as in part 1.

fruits.shift();
console.log(fruits);

// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])

fruits.reverse ();
console.log(fruits);

// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]






// Exercise 2:
// Using this array :

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”.

console.log(moreFruits[1][1][0]);