import { RECEIVE_SEARCHED_BOOKS, RECEIVE_MY_BOOKS, RESET_ERROR, HANDLE_ERROR, DELETE_SEARCH_BOOK } from './actionTypes';
import Axios from 'axios';

export function search(query) {
    const apiQuery = bookHelper(query)
    return function (dispatch) {
        // Retrieve Books from the Google Books API
        return Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + apiQuery + "&key=" + process.env.REACT_APP_GOOGLE_BOOKS_API_KEY)
            .then(response => {
                return response.data.items.map((book) => {
                    return (
                        {
                            title: book.volumeInfo.title,
                            authors: book.volumeInfo.authors,
                            id: book.id
                        })
                })
            }, error => console.log('An error occurred.', error))
            // Update store with the searched book results
            .then(response => dispatch(receiveSearchList(response)),
                error => console.log('An error occurred.', error)
            );
    }
}

export function getMyBookLists() {
    console.log("Get my books");
    return function (dispatch) {
        return Axios.get('/api/books/')
            .then(response => dispatch(receiveMyBookLists(response.data)),
                error => console.log('An error occurred.', error)
            );
    }
}

export function addToMyBookLists(book, newMarkType) {
    return function (dispatch) {
        return Axios.post('/api/books/', {
            title: book.title,
            authors: book.authors,
            id: book.id,
            markType: newMarkType
        }).then(response => console.log(response.data.flag))
    }
}

// TODO: Figure out how to handle "response"
export function updateMyBookLists(book, newMarkType) {
    return function (dispatch) {
        return Axios.put('/api/books/' + book.id, {
            title: book.title,
            authors: book.authors,
            id: book.id,
            markType: newMarkType
        }).then(response => console.log(response.data.flag)
        ).then(dispatch(getMyBookLists()));
    }
}

export function deleteFromMyLists(book, markType) {
    return function (dispatch) {
        return Axios.delete('/api/books/' + book.id, {
            title: book.title,
            authors: book.authors,
            id: book.id,
            markType: markType
        }).then(response => console.log(response.data.flag))
            .then(dispatch(getMyBookLists()));
    }
}

// Manipulate Search Results Lists
export const receiveSearchList = (searchListInfo) => ({
    type: RECEIVE_SEARCHED_BOOKS,
    payload: searchListInfo // [Books]
})

export const deleteSearchBook = (book) => ({
    type: DELETE_SEARCH_BOOK,
    bookInfo: book
})

//Get MyLists to components via Redux store
export const receiveMyBookLists = (myBooks) => ({
    type: RECEIVE_MY_BOOKS,
    myBookLists: myBooks // [toRead], [haveRead]
})

export const uiErrorHandler = (message) => ({
    type: HANDLE_ERROR,
    payload: message
})

export const uiErrorReset = () => ({
    type: RESET_ERROR
})

function bookHelper(query) {
    return query.replace(/ /g, "+")
}