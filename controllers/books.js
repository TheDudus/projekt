import ModelBook from "../models/modelBook.js";
import mongoose from "mongoose";

//POST
export const createBook = async (req, res) => {
    const book = req.body;

    const newBook = new ModelBook(book);

    try{
        await newBook.save();

        res.status(201).json(newBook);
    } catch (error){
        res.secure(409).json({message: error.message}); //
    }
}

//GET
export const getBook = async(req, res) => {
    try{
        const findBooks = await ModelBook.find();

        console.log(findBooks);

        res.status(200).json(findBooks);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}

export const singleBook = async (req, res) => {
    const { id: _id } = req.params;

    const book = req.body;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Książka o takim id nie istnieje!');

    const findedBook = await ModelBook.findById(_id, book);

    res.json(findedBook);
}

export const deleteBook = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Książka o takim id nie istnieje!');

    await ModelUser.findByIdAndRemove(_id);

    res.json('Książka usunięta!');
}

export const updateBook = async (req, res) =>{
    const {id: _id} = req.params;

    const book = req.body;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Uzytkownik o takim id nie istnieje!');

    const updated = await ModelBook.findByIdAndUpdate(_id, book, {new:true});

    res.json(updated);
}
