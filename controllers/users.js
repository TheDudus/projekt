import ModelUser from "../models/modelUser.js";
import modelUser from "../models/modelUser.js";
import mongoose from "mongoose";

// let users = [
//     {
//         firstName: "Jan",
//         lastName: "Kowalski",
//         age: 22
//     },
//     {
//         firstName: "Mark",
//         lastName: "Moore",
//         age: 27
//     }
// ]

//POST
export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new modelUser(user); //schemat usera z modelUser.js

    try{
        await newUser.save();

        res.status(201).json(newUser); //return kod 201 użytkownik utworzony zwraca nowego użytkownika
    } catch (error){
        res.secure(409).json({message: error.message}); // 409 konflikt nie został przetworzony
    }
}
//GET
export const getUser = async (req, res) => {
    try{
        const findUsers = await ModelUser.find(); //wyszukiwanie informacji w modelu wymagane async

        console.log(findUsers);

        res.status(200).json(findUsers); //return kod 200 wszystko ok, zwraca użytkowników
    } catch (error){
        res.status(404).json({message: error.message}); //404 błąd
    }
}
//GET/id
export const singleUser = async (req, res) => {
    const { id: _id } = req.params;

    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Uzytkownik o takim id nie istnieje!');

    const findedUser = await ModelUser.findById(_id, user);

    res.json(findedUser);
}
//DELETE
export const deleteUser = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Uzytkownik o takim id nie istnieje!');

    await ModelUser.findByIdAndRemove(_id);

    res.json('Użytkownik usunięty!');

}
//PATCH
export const updateUser = async (req, res) =>{
    const {id: _id} = req.params;

    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Uzytkownik o takim id nie istnieje!');

    const updated = await ModelUser.findByIdAndUpdate(_id, user, {new:true});

    res.json(updated);
}

