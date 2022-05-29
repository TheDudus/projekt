import express from "express";

import {} from "/controllers/"

const router = express.Router();

//Wszystkie zaczynają się od /books - określone w index.js

router.get('/', getBook); //GET

router.post('/', createBook); //POST

router.get('/:id', singleBook); //GET Single Book

router.delete('/:id', deleteBook); //DELETE

router.patch('/:id', updateBook); //UPDATE

export default  router;