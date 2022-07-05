import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import usersRoutes from './routes/users.js';
import booksRoutes from './routes/books.js';
import registerRoutes from "./routes/register.js";
import loginRoutes from "./routes/login.js";

import Users from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.set('view-engine','ejs');
app.use(express.urlencoded({extended:false})); //Pobieranie z formularzy views, name field

/*app.get('/login', (req, res) => {
    res.render('login.ejs')
});

app.get('/register', (req, res) => {
    res.render('register.ejs')
});*/

app.use('/login', loginRoutes); //Login user routes

app.use('/register', registerRoutes); //Register user routes

app.use('/users', usersRoutes); //Users routes

app.use('/books', booksRoutes);//Books routes

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



