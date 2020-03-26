import { searchInitialState } from '../../constants';
import { DELETE_SEARCH_BOOK, UPDATE_SEARCH_BOOKS } from '../actionTypes';

export default function searches(state = searchInitialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH_BOOKS: {
            return { ...state, queryResult: action.payload }
        }
        case DELETE_SEARCH_BOOK: {
            return Object.assign({}, state, {
                queryResult: state.queryResult.filter((book) => book.id !== action.bookInfo.id)
            })
        }
        default:
            return state;
    }
}