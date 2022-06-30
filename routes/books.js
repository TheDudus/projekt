import express from "express";

import {getBook, createBook, singleBook, deleteBook, updateBook} from "../controllers/books.js"

const router = express.Router();

//Wszystkie zaczynają się od /books - określone w index.js

router.get('/', getBook); //GET

router.post('/', createBook); //POST

router.get('/:id', singleBook); //GET Single Book

router.delete('/:id', deleteBook); //DELETE

router.patch('/:id', updateBook); //UPDATE

export default  router;