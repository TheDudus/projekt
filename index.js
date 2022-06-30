import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import usersRoutes from './routes/users.js';
import booksRoutes from './routes/books.js';
import Users from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

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



/*
const users = new Users(
    {
        firstName: 'Jan',
        lastName: 'Kowalski',
        age: 22
    });
users.save().then(() => {
    console.log(users);
}).catch(error => {
    console.log(error);
});*/
