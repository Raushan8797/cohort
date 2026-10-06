let http = require('http')
console.log(http);

let server = http.createServer((req, res) =>{
    console.log('hello');
    res.end('ok')
})

server.listen(3000, () =>{
    console.log("server is running on port 3000");
    
})