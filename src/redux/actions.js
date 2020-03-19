import {SEARCH, DELETE_BOOK} from './actionTypes'


export const search = (query) => ({
    type: SEARCH,
    payload: query
})

export const deleteBook = (bookLocation, id) => ({
    type: DELETE_BOOK,
    bookListType: bookLocation,
    bookId: id
})