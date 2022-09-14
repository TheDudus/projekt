import ModelMovie from "../models/modelMovie.js";
import mongoose from "mongoose";

//POST
export const createMovie = async (req, res) => {
    const movie = req.body;

    const newMovie = new ModelMovie(movie);

    try{
        await newMovie.save();

        res.status(201).json(newMovie);
    } catch (error){
        res.secure(409).json({message: error.message}); //
    }
}

//GET
export const getMovie = async(req, res) => {
    try{
        const findMovies = await ModelMovie.find();

        console.log(findMovies);

        res.status(200).json(findMovies);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}

export const singleMovie = async (req, res) => {
    const { id: _id } = req.params;

    const movie = req.body;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Film o takim id nie istnieje!');

    const findedMovie = await ModelMovie.findById(_id, movie);

    res.json(findedMovie);
}

export const deleteMovie = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Film o takim id nie istnieje!');

    await ModelMovie.findByIdAndRemove(_id);

    res.json('Film usunięty!');
}

export const updateMovie = async (req, res) =>{
    const {id: _id} = req.params;

    const movie = req.body;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Film o takim id nie istnieje!');

    const updated = await ModelMovie.findByIdAndUpdate(_id, movie, {new:true});

    res.json(updated);
}
