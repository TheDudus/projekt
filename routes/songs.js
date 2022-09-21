import express from "express";

import {getSong, createSong, singleSong, deleteSong, updateSong} from "../controllers/songs.js"

const router = express.Router();

//Wszystkie zaczynają się od /books - określone w index.js

router.get('/', getSong); //GET

router.post('/', createSong); //POST

router.get('/:id', singleSong); //GET Single Book

router.delete('/:id', deleteSong); //DELETE

router.patch('/:id', updateSong); //UPDATE

export default  router;