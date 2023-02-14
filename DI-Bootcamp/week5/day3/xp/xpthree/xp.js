// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”


const promiseResolve = Promise.resolve(3);
const promiseReject = Promise.reject("boo");


promiseResolve.then((resolve)  => console.log(resolve)).catch((error) => console.error(error))

promiseReject.then((resolve)  => console.log(resolve)).catch((error) => console.error(error))

