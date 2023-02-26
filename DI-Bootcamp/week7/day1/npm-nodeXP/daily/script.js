// import { largeNumber } from "./main.js";
// console.log(largeNumber);
// const b = 5;
// console.log(largeNumber+b);

const http = require('http')
const { largeNumber , currentdate } = require("./main.js")
const server = http.createServer(handleRes);
const port = 8080
const host = 'localhost'
currentdate();

function handleRes (req, res){
    console.log("req", req);
    console.log("res", res);
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(201);
    res.end(
        ("large num is ", largeNumber),    
        (`date and time are ${currentdate}`)
    )
} 

server.listen(port, host, () => {
    console.log('running on port 3000')
})





// const requestListener = function (req, res) {
//     res.writeHead(200);
//     res.end("My first server!");
// };

// const server = http.createServer((req, res) => {
//     console.log('hello get ur request');
//     console.log(req.method);

//     if(req.url === '/'){
//         if(req.method === 'GET'){
//             res.end('Im listening')
//         }
//     } else if (req.url === '/about'){
//         res.end('about page')
//     } else {
//         res.end('page not found')
//     }
// })



