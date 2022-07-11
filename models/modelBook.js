import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    pages: Number
});

const ModelBook = mongoose.model('ModelBook', bookSchema);

export default ModelBook;