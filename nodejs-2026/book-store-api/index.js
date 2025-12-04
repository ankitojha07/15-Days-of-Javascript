import express, { json } from "express";

const bookRoutes = require("./routes/book.routes")

const app = express()
const port = 3030;


// Middleware - (plugin)
app.use(express.json())

app.use('/',bookRoutes)

app.listen(port, () => {
    console.log(`Server up and running at port ${port}`);
})