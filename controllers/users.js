import ModelUser from "../models/modelUser.js";
import modelUser from "../models/modelUser.js";

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

export const singleUser = (req, res) => {
        const {id} = req.params;

        const foundUser = users.find((user) => user.id == id);

        res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the database!`);
}

export const updateUser = (req, res) =>{
    const {id} = req.params;

    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName){
        user.firstName = firstName;
    }

    if(lastName){
        user.lastName = lastName;
    }

    if(age){
        user.age = age;
    }

    res.send(`User with the id ${id} has been updated`);
}
