const express = require('express');
const router = express.Router();

// TODO: set toRead and haveRead as empty
const myBookLists = {
    toRead: [
        {
            title: "I Know Why The Cage Bird Sings",
            authors: "Maya Angelou",
            id: 1
        },
        {
            title: "Green Eggs and Ham",
            authors: "Dr. Seuss",
            id: 2
        }
    ],
    haveRead: [
        {
            title: "The Rainbow Fish",
            authors: "Marcus Pfister",
            id: 3
        },
        {
            title: "Outliers",
            authors: "Malcolm Gladwell",
            id: 4
        }
    ]
}

// GET books for MyLists
router.get('/', (req, res) => {
    res.status(200).send(myBookLists)
});

// Add searched book to ToRead List Or HaveRead List
router.post('/', (req, res) => {
    const bookItem = req.body;
    const markType = bookItem.markType // markType values are either "toRead" or "haveRead"
    if (markType === null || markType === "") {
        return res.status(400).send('Error. Must include a markType');
    }
    const bookFound = myBookLists.toRead.find((book) => book.id === bookItem.id) ||
        myBookLists.haveRead.find((book) => book.id === bookItem.id);
    if (bookFound) {
        return res.status(400).send('Cannot add a duplicate book to your list.');
    }
    myBookLists[markType] = myBookLists[markType].concat({
        title: bookItem.title,
        authors: bookItem.authors,
        id: bookItem.id
    });
    res.status(200).send({ message: 'Successfully added a book!', id: bookItem.id });
});

// Swap book from To Read to Have Read OR
// Swap Have Read to To Read
router.put('/:bookId', (req, res) => {
    const bookItem = req.body;
    const markType = bookItem.markType // markType values are either "toRead" or "haveRead"
    const currentLocation = markType === "toRead" ? "haveRead" : "toRead"
    // add book to markType location
    myBookLists[markType] = myBookLists[markType].concat({
        title: bookItem.title,
        authors: bookItem.authors,
        id: bookItem.id
    });
    // remove book from currently located list
    myBookLists[currentLocation] = myBookLists[currentLocation].filter((book) => book.id !== bookItem.id)
    res.status(200).send({ message: 'Successfully moved your book!', id: bookItem.id });
});

// Delete book from To Read OR Have Read list
router.delete('/:bookId', (req, res) => {
    const bookId = req.params.bookId;

    myBookLists["haveRead"] = myBookLists["haveRead"].filter((book) => book.id !== bookId);
    myBookLists["toRead"] = myBookLists["toRead"].filter((book) => book.id !== bookId);

    res.status(200).send({ message: 'Successfully deleted a book!', id: bookId });
});

module.exports = router;