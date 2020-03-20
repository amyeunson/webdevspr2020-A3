import {SEARCH, DELETE_BOOK, MOVE_BOOK} from './actionTypes'


export const search = (query) => ({
    type: SEARCH,
    payload: query
})

export const deleteBook = (bookLocation, book) => ({
    type: DELETE_BOOK,
    bookListType: bookLocation,
    bookInfo: book
})

export const moveBook = (bookLocation, book) => ({
    type: MOVE_BOOK,
    bookListType: bookLocation,
    bookInfo: book
})