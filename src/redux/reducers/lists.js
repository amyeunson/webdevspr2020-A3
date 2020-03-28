import { MOVE_BOOK, DELETE_BOOK, MARK_READ, MARK_NOT_READ, RECEIVE_MY_BOOKS } from "../actionTypes";
import { listsInitialState } from '../../constants';

export default function list(state = listsInitialState, action) {
    switch (action.type) {
        case RECEIVE_MY_BOOKS: {
            return Object.assign({}, state, {
                toRead: action.myBookLists.toRead,
                haveRead: action.myBookLists.haveRead
            })
        }

        case DELETE_BOOK: {
            if (action.currentLocation === "ToRead") {
                return Object.assign({}, state, {
                    toRead: state.toRead.filter((book) => book.id !== action.bookInfo.id),
                    haveRead: state.haveRead
                })
            }
            else if (action.currentLocation === "HaveRead") {
                return Object.assign({}, state, {
                    toRead: state.toRead,
                    haveRead: state.haveRead.filter((book) => book.id !== action.bookInfo.id),
                })
            }
            return state;

        }
        case MOVE_BOOK: {
            if (action.currentLocation === "ToRead" && action.markType === MARK_READ) {
                return Object.assign({}, state, {
                    toRead: state.toRead.filter((book) => book.id !== action.bookInfo.id),
                    haveRead: [...state.haveRead, action.bookInfo]
                })
            }
            else if (action.currentLocation === "HaveRead" && action.markType === MARK_NOT_READ) {
                return Object.assign({}, state, {
                    toRead: [...state.toRead, action.bookInfo],
                    haveRead: state.haveRead.filter((book) => book.id !== action.bookInfo.id)
                })
            }
            else if (action.currentLocation === "Search" && action.markType === MARK_NOT_READ) {
                return Object.assign({}, state, {
                    toRead: [...state.toRead, action.bookInfo],
                    haveRead: state.haveRead
                })
            }
            else if (action.currentLocation === "Search" && action.markType === MARK_READ) {
                return Object.assign({}, state, {
                    toRead: state.toRead,
                    haveRead: [...state.haveRead, action.bookInfo]
                })
            }
            return state;
        }
        default:
            return state;
    }
}

