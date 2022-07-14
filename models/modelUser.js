import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    books: String,
    userName: String,
    email: String,
    password: String
});

const ModelUser = mongoose.model('ModelUser', userSchema);

export default ModelUser;