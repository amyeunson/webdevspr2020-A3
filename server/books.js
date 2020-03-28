const axios = require('axios');
const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');
require('dotenv').config();

const apiKey = process.env.GOOGLE_BOOKS_API_KEY
console.log("Google API Key: " + apiKey)

let searchList = []
let myBookLists = { 
    toRead: [
        {
            title: "I Know Why The Cage Bird Sings",
            author: "Maya Angelou",
            id: 1
        },
        {
            title: "Green Eggs and Ham",
            author: "Dr. Seuss",
            id: 2
        }
    ],
    haveRead: [
        {
            title: "The Rainbow Fish",
            author: "Marcus Pfister",
            id: 3
        },
        {
            title: "Outliers",
            author: "Malcolm Gladwell",
            id: 4
        }
    ]
} 

// GET books from GoogleBooks endpoint
router.get('/search/:search', (req, res) => {
    //fetch API with query params
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.search + "&key=" + apiKey)
        .then(response => {
            
            searchList = response.data.items.map((book)=>{ return (
                {
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    id: book.id
                })
            })
            //grab data for each book and save
            // console.log(response.data.items)
        }).then(()=> {res.status(200).send(searchList)}, 
        error => console.log('An error occurred.', error))
});

// GET books for MyLists
router.get('/myBookLists', (req, res) => {
    res.status(200).send(myBookLists)
});

// Add searched book to ToReadList
router.post('/myBookLists/:bookId', (req, res) => { 
    const bookId = req.params.bookId;
    const bookItem = req.body;// body will require field for markType (mark as ToRead/HaveRead)
});

// Swap book from To Read to Have Read OR
// Swap Have Read to To Read
router.put('/myBookLists/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    const bookItem = req.body; // body will require fields for currentLocation and markType (mark as ToRead/HaveRead)
});

// Delete book from search list
router.delete('/search/:bookId', function (req, res) {
    const bookId = req.params.bookId;
});

// Delete book from Have Read list
router.delete('/myBookLists/:bookId', function (req, res) {
    const bookId = req.params.bookId; 
    const bookItem = req.body;// body will require field for currentLocation
});

module.exports = router;