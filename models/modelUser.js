import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    id: Number
});

const ModelUser = mongoose.model('ModelUser', userSchema);

export default ModelUser;