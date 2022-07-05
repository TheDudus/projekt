import express  from "express";

import {postRegister,getRegister} from "../controllers/register.js";


const router = express.Router();

//Wszystkie zaczynają się od /users - określone w index.js

router.get('/', getRegister); //GET

router.post('/', postRegister); //POST

export default  router;