import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    user_id: Number

});

const ModelBook = mongoose.model('ModelBook', bookSchema);

export default ModelBook;