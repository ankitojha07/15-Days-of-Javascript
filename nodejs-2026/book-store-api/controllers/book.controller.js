import { Books } from "../models/book.model";

export function getAllBooks(req, res) {
  res.json(Books);
}

export function getBookById(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Id must be of type number." });
  }
  const book = Books.find((e) => e.id === id);
  if (!book) {
    return res.status(404).json({ error: `Book with ${id} does not exist!` });
  }
  return res.json(book);
}

export function createBooks(req, res) {
  const { title, author } = req.body;
  if (!title || title === "")
    return res.status(400).json({ error: "Title is required" });
  if (!author || author === "")
    return res.status(400).json({ error: "Author is required" });

  const id = Books.length + 1;
  const book = { id, title, author };
  Books.push(book);
  console.log(Books);
  return res
    .status(201)
    .json({ Message: "Book has been added to the store Successfully!", id });
}

export function deleteBooks(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Id must be a number!" });
  }
  const indexToDelete = Books.findIndex((e) => e.id === id);

  if (indexToDelete < 0) {
    return res
      .status(404)
      .json({ error: `The id ${id} does not exists in our database` });
  }

  Books.splice(indexToDelete, 1);
  return res
    .status(200)
    .json({ message: `You have successfully deleted the book with id ${id}!` });
}

export default { getAllBooks, getBookById, createBooks, deleteBooks };
