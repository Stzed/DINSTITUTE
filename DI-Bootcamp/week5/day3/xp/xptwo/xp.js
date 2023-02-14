// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.



// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve ("success") ,4000)
// })

// promise.then(console.log).catch(console.error)


const promise = Promise.resolve(
    setTimeout(() => {
        console.log("success");
    }, 4000)
);

promise
.then(result => console.log(result))
.catch(error => console.error("Ooops something went wrong", error))




