import bcrypt from "bcrypt";
import sendMail from "../mailSender.js";

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
        /*

        */
        res.redirect('/login');
    } catch(error){
        res.secure(409).json({message: error.message}); // 409 konflikt nie został przetworzony
        res.redirect('register');
    }
}

//GET
export const getRegister = async (req,res) => {
    await sendMail(
        "kolef22278@dnitem.com",
        "Zarejestrowano nowego użytkownika",
        "Witaj, z tego adresu e-mail zarejestrowano nowego użytkownika"
    );
    res.render('register.ejs');
}