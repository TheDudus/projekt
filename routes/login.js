import express from "express";
import passport from "passport";
import sendMail from "../mailSender.js";


const router = express.Router();

//Wszystkie zaczynają się od /login - określone w index.js

router.get('/', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
}); //GET

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

router.post('/', checkNotAuthenticated, passport.authenticate('local', {
    failureRedirect: '/login',
    failureMessage: true
}),async function (req, res) {
    req.session.user = req.user;
    res.redirect('/');
    await sendMail(
        req.body.email,
        'Zalogowano się na twoje konto',
        'Zalogowano się na twoje konto!'
    );
})

export default router;
