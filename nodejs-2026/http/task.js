const http = require("node:http")
const fs = require("node:fs")

const PORT = 3000;
const server = http.createServer((req,res)=>{
    const method = req.method;
    const path = req.url;

    const log = `\n[${Date.now()}]:${method} ${path}`
    fs.appendFileSync("logs.txt",log, "utf-8")

    switch(method){
        case 'GET':{
            switch(path){
                case '/':
                    return res.writeHead(200).end("Hello User!");
        
                case '/contact-us':
                    return res.writeHead(200).end("Ankit Ojha - 8700091952")
                    
                case '/tweet':
                    return res.writeHead(200).end("tweet-1\ntweet-2")

                default:
                    return res.writeHead(404).end('oh ooh! Not found!')
            }
        }
        case 'POST':{
            switch(path){
                case '/tweet':
                    return res.writeHead(201).end("Post has beed sent sucessfully!")
            }
        }
        default:
            return res.writeHead(404).end('oh ooh! Not found!')
    }

   
})

server.listen(PORT, ()=>{
    console.log(`Server is up and running at the port ${PORT}`);
    
})