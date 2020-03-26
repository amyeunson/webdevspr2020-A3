import { moveBook, deleteBook } from '../src/redux/actions';
const axios = require('axios');
const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');


// get books from GoogleBooks endpoint
router.get('/:search', (req, res) => {
    //fetch API with query params
    let books;
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.search + "&key=AIzaSyCzmPJwOqDFnGys2ZYBgbF-HqwW3BLirBY")
        .then(response => {
            books = response;
            //grab data for each book and save
            console.log(books)
        })
    return res.status(200).send(books);
});

// Test get method
router.get('/', (req, res) => {
    // give lists.js the book arrays
    console.log("INSIDE GET")
    return res.send("Plain GET")
});

// place book on either list
router.post('/', (req, res) => {
    const bookId = uuidv4();
    const bookItem = req.body;

    const book = {
        id: bookId,
        title: bookItem.title,
        author: bookItem.author,
    }

    // async
    moveBook("Search", book, body.markType)
    res.status(200).send({ message: 'Success!', bookId: bookId });
});

// Update book list placement
router.put('/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    const bookItem = req.body;

    const book = {
        id: bookId,
        title: bookItem.title,
        author: bookItem.author,
    }

    // async
    moveBook("Search", book, bookItem.markType)
    res.status(200).send('Success!');
});

// delete book from list
router.delete('/:bookId', function (req, res) {
    const bookId = req.params.bookId;
    const bookItem = req.body;

    const book = {
        id: bookId,
        title: bookItem.title,
        author: bookItem.author,
    }

    //async
    deleteBook("BookLocation", book)
    res.status(200).send('Success!');
});

module.exports = router;