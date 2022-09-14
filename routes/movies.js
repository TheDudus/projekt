import express from "express";

import {getMovie, createMovie, singleMovie, deleteMovie, updateMovie} from "../controllers/movie.js"

const router = express.Router();

//Wszystkie zaczynają się od /books - określone w index.js

router.get('/', getMovie); //GET

router.post('/', createMovie); //POST

router.get('/:id', singleMovie); //GET Single Book

router.delete('/:id', deleteMovie); //DELETE

router.patch('/:id', updateMovie); //UPDATE

export default  router;