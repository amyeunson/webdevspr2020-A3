import { RECEIVE_SEARCHED_BOOKS, DELETE_BOOK, DELETE_SEARCH_BOOK, MOVE_BOOK, RECEIVE_MY_BOOKS } from './actionTypes';
import Axios from 'axios';


export function search(query) {
    console.log("---SEARCH API----" + query);
    const apiQuery = bookHelper(query)
    console.log("API FRIENDLY", apiQuery);
    return function (dispatch) {
        // Axios is a just an easy way to make an API call
        // Fetch data containing return from Google Books API
        return Axios.get(`/api/books/search/` + apiQuery)
            // Update store with search Results
            .then(response => dispatch(receiveSearchList(response.data)), 
                error => console.log('An error occurred.', error)
            );
    }
}

export function getMyBookLists() {
    return function (dispatch) {
        return Axios.get('/api/books/myBookLists/')
            // Update store with search Results
            .then(response => dispatch(receiveMyBookLists(response.data)), 
                error => console.log('An error occurred.', error)
            );
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

export const deleteBook = (bookLocation, book) => ({
    type: DELETE_BOOK,
    currentLocation: bookLocation,
    bookInfo: book
})

export const deleteSearchBook = (bookLocation, book) => ({
    type: DELETE_SEARCH_BOOK,
    currentLocation: bookLocation,
    bookInfo: book
})

export const moveBook = (bookLocation, book, newMarkType) => ({
    type: MOVE_BOOK,
    currentLocation: bookLocation,
    markType: newMarkType, // Move to MarkAsRead or MarkAsNotRead
    bookInfo: book
})

function bookHelper(query) {
    return query.replace(/ /g, "+")
}