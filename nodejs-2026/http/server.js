const http = require ("node:http")

const PORT = 8000;
const server = http.createServer((req,res)=>{
    // all the DB operations goes here!!!
console.log(req.url);
console.log(req.method);

switch(req.url){
    case '/':
        res.writeHead(200);
        return res.end(`Homepage`)
    
    case '/contact-us':
        res.writeHead(200);
        return res.end("you can contact me at ankitojha1409@gmail.com")

    case '/careers':
            res.writeHead(200);
            return res.end("check it out!")

    default:
        res.writeHead(404);
        res.end("You are lost!")
}

})

server.listen(PORT, ()=>{
    console.log(`Server is up an running at port: ${PORT} `);
})