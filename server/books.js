const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

// const foodList = [{foodId: "1234", name: 'banana', color: 'yellow', shape: 'crescent'},
//     {foodId: "abcd", name: 'apple', color: "red/green", shape: 'round'}];

// get books from API endpoint
router.get('/:search', (req, res) => {
    //fetch API with query params
    const query = req.params.search;
    res.send(query)
    // Query format
    // https://www.googleapis.com/books/v1/volumes?q=harry+potter
});

// get books for each list
router.get('/', (req, res) => {
    // give lists.js the book arrays
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