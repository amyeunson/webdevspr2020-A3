import { UPDATE_SEARCH_BOOKS, DELETE_BOOK, DELETE_SEARCH_BOOK, MOVE_BOOK } from './actionTypes';
import Axios from 'axios';

export function search(query) {
    const apiQuery = bookHelper(query)
    return function (dispatch) {
        // Fetch data containing return data from Google Books API
        return Axios.get(`/api/books/` + apiQuery)
            // Update store with search Results
            .then(response => dispatch(updateStore(response)),
                error => console.log('An error occurred.', error)
            );
    }
}

export const updateStore = (bookInfo) => ({
    type: UPDATE_SEARCH_BOOKS,
    payload: bookInfo
})

export const deleteBook = (bookLocation, book) => ({
    // will call Axios.delete(bookId).then(response=> methodThatUpdatesStore(response.data))
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