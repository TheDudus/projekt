import express  from "express";
import passport from "passport";



const router = express.Router();

//Wszystkie zaczynają się od /login - określone w index.js

router.get('/', (req,res)=>{
    res.render('login.ejs')
}); //GET


router.post('/', passport.authenticate('local',{
    successRedirect: '/users',
    failureRedirect: '/login',
    failureFlash: true},
    function (req, res) {
        console.log(req.user);
    }));

export default  router;