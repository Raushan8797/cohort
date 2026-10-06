// let http = require('http')
// console.log(http);

// let server = http.createServer((req, res) =>{
//     console.log('hello');
//     res.end('ok get it')
// })

// server.listen(3000, () =>{
//     console.log("server is running on port 3000");
    
// })

const express = require("express")
const app = express()

app.get("/", (req,res) =>{
    res.send("ok got it")
} )

app.listen(3000, () =>{
    console.log("server is running on port 3000");
    
})