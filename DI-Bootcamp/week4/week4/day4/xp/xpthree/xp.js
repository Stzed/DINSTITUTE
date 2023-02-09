// 🌟 Exercise 3: User & Id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


const users = { user1: 18273, 
                user2: 92833, 
                user3: 90315 }

const turningToArray = Object.entries(users);
console.log(turningToArray);


const duplicate = [];
for (const [user, id] of turningToArray) {
    duplicate.push([user , id * 2]);
};

console.log(duplicate);