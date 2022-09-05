if(process.env.NODE_ENV !== 'production'){
    dotenv.config();
}

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from "passport";
import flash from 'express-flash';
import session from 'express-session';
import * as dotenv from 'dotenv'
import methodOverride from 'method-override';

import usersRoutes from './routes/users.js';
import booksRoutes from './routes/books.js';
import registerRoutes from "./routes/register.js";
import loginRoutes from "./routes/login.js";
import ModelUser from "./models/modelUser.js";


import initializePassport from "./passport-config.js";

initializePassport(
    passport,
    email => ModelUser.findOne({email: email}),
    id => ModelUser.findById(id)
)

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.set('view-engine','ejs');
app.use(express.urlencoded({extended:false})); //Pobieranie z formularzy views, name field

app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', {name: req.session.user.email})
});

app.use('/login', loginRoutes); //Login user routes

app.use('/register', registerRoutes); //Register user routes

app.use('/users', checkAuthenticated, usersRoutes); //Users routes

app.use('/books', checkAuthenticated, booksRoutes);//Books routes

app.delete('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

const CONNECTION_URL = 'mongodb+srv://dudus:dudus123@cluster0.njhlzoe.mongodb.net/?retryWrites=true&w=majority'; //DATABASE URL

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true }, function () {}
);

mongoose.connection.on("connected", function () {
    console.log("Connected to database.");
});
mongoose.connection.on("error", function (error) {
    console.log("No connection to the database. " + error);
});
mongoose.connection.on("disconnected", function () {
    console.log("Disconnecting from the database.");
});

function checkAuthenticated(req, res, next) {

    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}


