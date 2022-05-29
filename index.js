import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';
import booksRoutes from './routes/books.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes); //Users routes

app.use('/books', booksRoutes);//Books routes

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));