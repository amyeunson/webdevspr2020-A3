import { ADD_BOOK, MOVE_BOOK, DELETE_BOOK } from "../actionTypes";
import { listsInitialState } from '../../constants';

export default function list(state = listsInitialState, action) {
    switch (action.type) {
        case ADD_BOOK: {
            return state;
        }
        case DELETE_BOOK: {
            if( action.bookListType === "ToRead"){
                return Object.assign({}, state, {
                    toRead: state.toRead.filter((book) => book.id !== action.bookInfo.id),
                    haveRead: state.haveRead
                })
            }
            else if (action.bookListType === "HaveRead") {
                return Object.assign({}, state, {
                toRead:state.toRead ,
                haveRead: state.haveRead.filter((book) => book.id !== action.bookInfo.id), 
                })
            }
            return state;

        }
        case MOVE_BOOK: { 
            if( action.bookListType === "ToRead"){
                return Object.assign({}, state, {
                    toRead: state.toRead.filter((book) => book.id !== action.bookInfo.id),
                    haveRead: [...state.haveRead, action.bookInfo]
                })
            }
            else if (action.bookListType === "HaveRead") {
                return Object.assign({}, state, {
                toRead: [...state.toRead, action.bookInfo] ,
                haveRead: state.haveRead.filter((book) => book.id !== action.bookInfo.id), 
                })
            }
            return state;
        }
        default:
            return state;
    }
}

