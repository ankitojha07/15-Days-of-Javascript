import { count } from "drizzle-orm";
import { Books } from "../models/book.model.js";

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
  const books = req.body;

  if (!Array.isArray(books) || books.length === 0) {
    return res.status(400).json({ error: "Request body must be a non-empty array of books" })
  }

  const newBook = [];
  let nextId = Books.length + 1;

  for (let i = 0; i < books.length; i++) {
    const { title, author } = books[i];

    if (!title || title.trim() === "") {
      return res.status(400).json({ error: "Title is required to add a book." })
    }

    if (!author || author.trim() === "") {
      return res.status(400).json({ error: "Author is required." })
    }

    const book = { id: nextId++, title, author };
    newBook.push(book);
  }

  Books.push(...newBook)
  return res
    .status(201)
    .json({ message: "Book has been added to the store Successfully!", count:newBook.length, books: Books});
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
