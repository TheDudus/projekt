import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    books: String
});

const ModelUser = mongoose.model('ModelUser', userSchema);

export default ModelUser;