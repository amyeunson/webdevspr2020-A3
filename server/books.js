const express = require('express');
const router = express.Router();

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

// Delete book from Have Read list
router.delete('/myBookLists/:bookId', function (req, res) {
    const bookId = req.params.bookId; 
    const bookItem = req.body;// body will require field for currentLocation
});

module.exports = router;