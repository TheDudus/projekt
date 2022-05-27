import express  from "express";

import {createUser, deleteUser, getUser, singleUser, updateUser} from "../controllers/users.js";


const router = express.Router();

//Wszystkie zaczynają się od /users - określone w index.js

router.get('/', getUser); //GET

router.post('/', createUser); //POST

router.get('/:id', singleUser); //GET Single User

router.delete('/:id', deleteUser); //DELETE

router.patch('/:id', updateUser); //UPDATE

export default  router;