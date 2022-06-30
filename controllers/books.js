import {v4 as uuidv4} from "uuid";

// let books = [
//     {
//         title: "Harry Portier",
//         author: "J.K.Rowling",
//         realseDate: 2002
//     },
//     {
//         title: "Przygody Dawida",
//         author: "WSEI",
//         realseDate: 2002
//     }
// ]

export const createBook = (req, res) => {
    const book = req.body;

    users.push({ ...book, id: uuidv4() });

    res.send(`Book with the title ${book.title} added to the database!`);
}

export const getBook = (req, res) => {
    console.log(books);

    res.send(books);
}

export const singleBook = (req, res) => {
        const {id} = req.params;

        const foundBook = book.find((book) => book.id == id);

        res.send(foundBook);
}

export const deleteBook = (req, res) => {
    const { id } = req.params;

    books = books.filter((book) => book.id != id);

    res.send(`Book with the id ${id} (title: ${title}) deleted from the database!`);
}

export const updateBook = (req, res) =>{
    const {id} = req.params;

    const {title, author, realseDate} = req.body;

    const book = books.find((book) => book.id == id);

    if(title){
        book.title = title;
    }

    if(author){
        book.author = author;
    }

    if(realsedate){
        book.realseDate = realseDate;
    }

    res.send(`Book with the id ${id} (title: ${title}) has been updated`);
}
