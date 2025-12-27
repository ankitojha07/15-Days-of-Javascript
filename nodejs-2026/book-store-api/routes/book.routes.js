import { Router } from "express";
import Controller from "../controllers/book.controller.js";
const router = Router();

router.get("/", Controller.getAllBooks);

router.get("/:id", Controller.getBookById);

// Implement POST requests to add Books

router.post("/", Controller.createBooks);

// delete a book by id

router.delete("/:id", Controller.deleteBooks);

export default router;
