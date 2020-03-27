const axios = require('axios');
const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');
require('dotenv').config();

const apiKey = process.env.GOOGLE_BOOKS_API_KEY
console.log("Google API Key: " + apiKey)

let searchList =
    [{
        title:"searchBook",
        id:"1"
    }]
let haveRead = 
    [{
        title:"haveReadBook",
        id:"2"
    }]
let toRead =
    [{
        title:"toReadBook",
        id:"3"
    }]


// get books from GoogleBooks endpoint
router.get('/:search', (req, res) => {
    //fetch API with query params
    let books;
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.search + "&key=" + apiKey)
        .then(response => {
            books = response.data.items;
            //grab data for each book and save
            console.log(response.data.items)
        }).then(()=> {return res.send(books)}, 
        error => console.log('An error occurred.', error))
    
});

router.get('/', (req, res) => {
    // give lists.js the book arrays
    console.log("INSIDE GET")
    return res.send("Plain GET")
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