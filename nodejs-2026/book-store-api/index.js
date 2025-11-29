import express from "express";

const app = express()
const port = 3030;

const books = [
    {"id":1, title:"Book 1", author:"Author 1"},
    {"id":2, title:"Book 2", author:"Author 2"},
    {"id":3, title:"Book 3", author:"Author 3"},
]

app.get("/", (req,res)=>{
    res.status(200).json(books)
})

app.get('/books', (req,res)=>{
    res.status(200).json(books)
})

app.get('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({error:"Id must be of type number."})
    }

    const book = books.find((e)=>e.id === id);

    

    if(!book){
        return res 
        .status(404)
        .json({error:`Book with ${id} does not exist!`})
    }

    return res.json(book)
})

app.listen(port, ()=>{
    console.log(`Server up and running at port ${port}`);
})