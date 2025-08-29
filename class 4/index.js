const http = require('http');
const fs = require("fs");
const url = require("url");

function handler(){
    fs.appendFile("log.txt", `${Date.now()}: ${req.url}, ${req.method}, New req received\n`, ()=>{
        const detailedUrl = url.parse(req.url, true)
        console.log(detailedUrl);
        
        switch(detailedUrl.pathname){
            case "/":
                if(req.method === "GET"){
                    res.end(`<div style="background-color: red; color: black"><h1>hello GET method from home</h1></div>`)
                }else if(req.method === "POST"){
                    res.end(`<div style="background-color: red; color: black"><h1>hello POST method from home</h1></div>`)
                }else if(req.method === "PUT"){
                    res.end(`<div style="background-color: red; color: black"><h1>hello PUT method from home</h1></div>`)
                }else if(req.method === "DELETE"){
                    res.end(`<div style="background-color: red; color: black"><h1>hello DELETE method from home</h1></div>`)
                }
            break
            case "/about" : res.end(`my name is ${detailedUrl.query.name}`)
            break
            case "/contact-us" : res.end("hello from contact-us")
            break
            default : res.end("404 not found")
        }
    })    
}

const myServer = http.createServer(handler)

myServer.listen(8000)