import express from "express";
const app = express()

const port = 3000;

app.get('/', (req,res)=>{
    res.send("Hello User!")
})

app.listen(port, ()=>{
    console.log(`App is up and running on port ${port}`);
    
})