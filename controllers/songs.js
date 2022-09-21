import ModelSong from "../models/modelSongs.js";
import mongoose from "mongoose";

//POST
export const createSong = async (req, res) => {
    const song = req.body;

    const newSong = new ModelSong(song);

    try{
        await newSong.save();

        res.status(201).json(newSong);
    } catch (error){
        res.secure(409).json({message: error.message}); //
    }
}

//GET
export const getSong = async(req, res) => {
    try{
        const findSongs = await ModelSong.find();

        console.log(findSongs);

        res.status(200).json(findSongs);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}

export const singleSong = async (req, res) => {
    const { id: _id } = req.params;

    const song = req.body;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Piosenka o takim id nie istnieje!');

    const findedSong = await ModelSong.findById(_id, song);

    res.json(findedSong);
}

export const deleteSong = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Piosenka o takim id nie istnieje!');

    await ModelSong.findByIdAndRemove(_id);

    res.json('Film usunięty!');
}

export const updateSong= async (req, res) =>{
    const {id: _id} = req.params;

    const song = req.body;

    if(!mongoose.Types.ObjectId.isValid((_id))) return res.status(404).send('Piosenka o takim id nie istnieje!');

    const updated = await ModelSong.findByIdAndUpdate(_id, song, {new:true});

    res.json(updated);
}
