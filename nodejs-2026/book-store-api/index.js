import express, { json } from "express";

const app = express()
const port = 3030;

const Books = [
    { "id": 1, title: "Book 1", author: "Author 1" },
    { "id": 2, title: "Book 2", author: "Author 2" },
    { "id": 3, title: "Book 3", author: "Author 3" },
]

// Middleware - (plugin)
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json(Books)
})

// Implement get requests to get Books

app.get('/books', (req, res) => {
    res.status(200).json(Books)
})

// get book by Id

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "Id must be of type number." })
    }
    const book = Books.find((e) => e.id === id);
    if (!book) {
        return res
            .status(404)
            .json({ error: `Book with ${id} does not exist!` })
    }
    return res.json(book)
})

// Implement POST requests to add Books

app.post("/books", (req, res) => {

    const { title, author } = req.body;
    if (!title || title === '') return res.status(400).json({ error: "Title is required" })
    if (!author || author === '') return res.status(400).json({ error: "Author is required" })

    const id = (Books.length)+1;
    const book = { id, title, author };
    Books.push(book)
    console.log(Books);
    return res.status(201).json({ Message: "Book has been added to the store Successfully!", id })
})

// delete a book by id

app.delete("/books/:id", (req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({error:"Id must be a number!"})
    }
    const indexToDelete = Books.findIndex((e)=> e.id === id);

    if(indexToDelete<0){
        return res.status(404).json({error:`The id ${id} does not exists in our database`})
    }

    Books.splice(indexToDelete, 1);
    return res.status(200).json({message:`You have successfully deleted the book with id ${id}!`})
})

app.listen(port, () => {
    console.log(`Server up and running at port ${port}`);
})