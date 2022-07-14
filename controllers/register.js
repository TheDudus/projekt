import bcrypt from "bcrypt";

import ModelUser from "../models/modelUser.js";

//POST
export const postRegister = async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        const newAuth = new ModelUser({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        await newAuth.save();

        res.redirect('/login');
    } catch(error){
        res.secure(409).json({message: error.message}); // 409 konflikt nie został przetworzony
        res.redirect('register');
    }
}

//GET
export const getRegister = (req,res) => {
    res.render('register.ejs');
}