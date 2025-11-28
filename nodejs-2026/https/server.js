const http = require ("node:http")

const PORT = 8000;
const server = http.createServer((req,res)=>{
    // all the DB operations goes here!!!
res.writeHead(200, {'content-type':'text/plain'});
res.end("okay")
console.log("I have an incoming request!");
})

server.listen(PORT, ()=>{
    console.log(`Server is up an running at port: ${PORT} `);
})