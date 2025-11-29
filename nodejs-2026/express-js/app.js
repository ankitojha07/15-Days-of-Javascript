import express from "express";
const app = express()

const port = 3000;

app.get('/', (req,res)=>{
    res.send("Hello User!")
})

app.get('/contact', (req,res)=>{
    res.status(200).json({"Email":"ankit.ojha@leena.ai", "phone":"9876543"})
})

app.post('/tweet',(req,res)=>{
    res.status(201).end("Post created successfully")
})

app.get('/tweet',(req,res)=>{
    res.status(200).end(`tweet-1\ntweet-1`)
})

app.listen(port, ()=>{
    console.log(`App is up and running on port ${port}`);
    
})