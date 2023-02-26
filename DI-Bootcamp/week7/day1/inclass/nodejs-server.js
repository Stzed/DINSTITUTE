const http = require('http');

const server = http.createServer((req, res) => {
    console.log('hello get ur request');
    console.log(req.method);

    if(req.url === '/'){
        if(req.method === 'GET'){
            res.end('home page')
        }
    } else if (req.url === '/about'){
        res.end('about page')
    } else {
        res.end('page not found')
    }
})

server.listen(5001, () =>{
    console.log('run on port 5001');
})