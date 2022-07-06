import express  from "express";

import {getLogin} from "../controllers/login.js";
import passport from "passport";


const router = express.Router();

//Wszystkie zaczynają się od /login - określone w index.js

router.get('/', getLogin); //GET


router.post('/', passport.authenticate('local', { //POST //TODO FIX local thing
    successRedirect: '/users',
    failureRedirect: '/login',
    failureFlash: true
}));

export default  router;