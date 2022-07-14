import express from "express";
import passport from "passport";


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
}), function (req, res) {
    req.session.user = req.user;
    res.redirect('/');
})

export default router;
