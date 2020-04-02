import {
    RECEIVE_SEARCHED_BOOKS, RECEIVE_MY_BOOKS, RESET_ERROR, HANDLE_SUCCESS, HANDLE_DELETE_ERROR, HANDLE_UPDATE_ERROR,
    HANDLE_ADD_TWICE_ERROR, DELETE_SEARCH_BOOK, HANDLE_GET_ERROR, HANDLE_SEARCH_DISPLAY_ERROR, HANDLE_API_ERROR
} from './actionTypes';
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
            }, error => dispatch(handleAPIError(error))
                // Update store with the searched book results
            ).then(response => dispatch(receiveSearchList(response)),
                error => dispatch(handleDisplaySearched(error)))
    }
}

export function getMyBookLists() {
    return function (dispatch) {
        return Axios.get('/api/books/')
            .then(response => dispatch(receiveMyBookLists(response.data)),
                error => dispatch(handleGetError(error)))
    }
}

export function addToMyBookLists(book, newMarkType) {
    return function (dispatch) {
        return Axios.post('/api/books/', {
            title: book.title,
            authors: book.authors,
            id: book.id,
            markType: newMarkType
        }).then(response => dispatch(handleSuccess(response)),
            error => dispatch(handleTwiceAddError(error)))
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
        }).then(response => dispatch(handleSuccess(response)),
            error => dispatch(handleUpdateError(error))
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
        }).then(response => dispatch(handleSuccess(response)),
            error => dispatch(handleDeleteError(error))
        ).then(dispatch(getMyBookLists()));
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

// Get MyLists to components via Redux store
export const receiveMyBookLists = (myBooks) => ({
    type: RECEIVE_MY_BOOKS,
    myBookLists: myBooks // [toRead], [haveRead]
})

// Handle success and errors
export const handleSuccess = () => ({
    type: HANDLE_SUCCESS
})

export const uiErrorReset = () => ({
    type: RESET_ERROR
})

export const handleTwiceAddError = () => ({
    type: HANDLE_ADD_TWICE_ERROR
})

export const handleUpdateError = () => ({
    type: HANDLE_UPDATE_ERROR
})

export const handleDeleteError = () => ({
    type: HANDLE_DELETE_ERROR
})

export const handleGetError = () => ({
    type: HANDLE_GET_ERROR
})

export const handleAPIError = () => ({
    type: HANDLE_API_ERROR
})

export const handleDisplaySearched = () => ({
    type: HANDLE_SEARCH_DISPLAY_ERROR
})

// Helpers
function bookHelper(query) {
    return query.replace(/ /g, "+")
}