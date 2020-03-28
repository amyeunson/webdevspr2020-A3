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
router.get('/:search', (req, res) => {
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

// place book on either list
router.post('/', (req, res) => {
    const body = req.body;
    const bookId = uuidv4();
    // foodList.push({
    //     foodId: foodId,
    //     name: body.name,
    //     color: body.color,
    //     shape: body.shape,
    // });
    res.status(200).send({ message: 'Success!', bookId: bookId });
});

// Update book list placement
router.put('/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    const bookItem = req.body;
    // const foundFood = foodList.find((foodItem) => foodItem.foodId === foodId);
    // if (!foundFood) {
    //     res.status(404);
    //     return res.send({ error: 'Food not found!' });
    // }

    // foundFood.name = foodBody.name;
    // foundFood.color = foodBody.color;
    // foundFood.shape = foodBody.shape;

    res.status(200).send('Success!');
});

// delete book from list
router.delete('/:bookId', function (req, res) {
    const bookId = req.params.bookId;
    // for (var i = foodList.length - 1; i >= 0; i--) {
    //     if (foodList[i].foodId === foodId) {
    //         foodList.splice(i, 1);
    //     }
    // }
    // Note that DELETE requests are ALWAYS successful,
    // even if the resource is already delete
    res.status(200).send('Success!');
});

module.exports = router;