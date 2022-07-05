import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
});

const AuthUser = mongoose.model('AuthUser', authSchema);

export default AuthUser;