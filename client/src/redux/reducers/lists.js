// import { MOVE_BOOK, DELETE_BOOK, MARK_READ, MARK_NOT_READ} from "../actionTypes";
import { RECEIVE_MY_BOOKS } from "../actionTypes";
import { listsInitialState } from '../../constants';

export default function list(state = listsInitialState, action) {
    switch (action.type) {
        case RECEIVE_MY_BOOKS: {
            return Object.assign({}, state, {
                toRead: action.myBookLists.toRead,
                haveRead: action.myBookLists.haveRead
            })
        }
        default:
            return state;
    }
}

