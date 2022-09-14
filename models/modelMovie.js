import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title: String,
    producer: String,
    time: Number,
    user_id: String

});

const ModelMovie = mongoose.model('ModelMovie', movieSchema);

export default ModelMovie;