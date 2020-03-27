import { UPDATE_SEARCHED_BOOKS, DELETE_BOOK, DELETE_SEARCH_BOOK, MOVE_BOOK } from './actionTypes';
import Axios from 'axios';


export function search(query) {
    console.log("---SEARCH API----" + query);
    const apiQuery = bookHelper(query)
    console.log("API FRIENDLY", apiQuery);
    return function (dispatch) {
        // Axios is a just an easy way to make an API call
        // Fetch data containing return from Google Books API
        return Axios.get(`/api/books/` + apiQuery)
            // Update store with search Results
            .then(response => console.log(response), //  dispatch(updateStore(response))
                error => console.log('An error occurred.', error)
            );
    }
}

export const updateStore = (bookInfo) => ({
    type: UPDATE_SEARCHED_BOOKS,
    payload: bookInfo
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