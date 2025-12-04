import express, { json } from "express";


import bookRoutes from "./routes/book.routes.js";

const app = express()
const port = 3030;


// Middleware - (plugin)
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({message:"Welcome to the book store API!"})
})

app.use('/books',bookRoutes)

app.listen(port, () => {
    console.log(`Server up and running at port ${port}`);
})