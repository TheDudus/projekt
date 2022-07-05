import express  from "express";

import {getLogin,postLogin} from "../controllers/login.js";


const router = express.Router();

//Wszystkie zaczynają się od /login - określone w index.js

router.get('/', getLogin); //GET
router.post('/',postLogin); //POST

export default  router;