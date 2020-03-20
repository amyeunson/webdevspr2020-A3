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
                    toRead: state.toRead.filter((book) => book.id !== action.bookId),
                    haveRead: state.haveRead
                })

            }
            else if (action.bookListType === "HaveRead") {
                return Object.assign({}, state, {
                toRead:state.toRead ,
                haveRead: state.haveRead.filter((book) => book.id !== action.bookId), 
                })
            }
            return state;

        }
        case MOVE_BOOK: { // again, may not need if we handle this condition in ADD
            return state;
        }
        default:
            return state;
    }
}

