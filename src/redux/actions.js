import { RECEIVE_SEARCHED_BOOKS, RECEIVE_MY_BOOKS, ADD_TO_MY_LIST, UPDATE_MY_LIST, DELETE_SEARCH_BOOK } from './actionTypes';
import Axios from 'axios';


export function search(query) {
    console.log("---SEARCH API----" + query);
    const apiQuery = bookHelper(query)
    console.log("API FRIENDLY", apiQuery);
    return function (dispatch) {
        // Retrieve Books from the Google Books API
        return Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + apiQuery + "&key=" + process.env.REACT_APP_GOOGLE_BOOKS_API_KEY)
        .then(response => {
            return response.data.items.map((book)=>{ return (
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
    return function (dispatch) {
        return Axios.get('/api/books/')
            // Update store with search Results
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
          }).then(response => dispatch(responseToAddBookLists(response.data)),
            ).catch((error) => console.log(error.message));
    }
}

// TODO: Figure out how to handle "response"
export function updateMyBookLists(book, newMarkType) {
    return function (dispatch) {
        console.log("action", book, newMarkType)
        return Axios.put('/api/books/' + book.id, {
            title: book.title,
            authors: book.authors,
            id: book.id,
            markType: newMarkType
          }).then(response => dispatch(responseToUpdateBookLists()),
            ).then( dispatch(getMyBookLists()));
    }
}

export const receiveSearchList = (searchListInfo) => ({
    type: RECEIVE_SEARCHED_BOOKS,
    payload: searchListInfo
})

export const receiveMyBookLists = (myBooks) => ({
    type: RECEIVE_MY_BOOKS,
    myBookLists: myBooks // [toRead], [haveRead]
})

export const responseToAddBookLists = (book) => ({
    type: ADD_TO_MY_LIST,
    bookName: book
})

export const responseToUpdateBookLists = () => ({
    type: UPDATE_MY_LIST
})

export const deleteSearchBook = (book) => ({
    type: DELETE_SEARCH_BOOK,
    bookInfo: book
})

function bookHelper(query) {
    return query.replace(/ /g, "+")
}