import mongoose from "mongoose";

const songSchema = mongoose.Schema({
    title: String,
    author: String,
    time: Number,
    user_id: String

});

const ModelSong = mongoose.model('ModelSong', songSchema);

export default ModelSong;