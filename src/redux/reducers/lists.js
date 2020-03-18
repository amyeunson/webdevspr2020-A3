import { ADD_BOOK, MOVE_BOOK, DELETE_BOOK } from "../actionTypes";
import searchInitialState from '../../constants';


export default function (state = searchInitialState, action) {
    switch (action.type) {
        case ADD_BOOK: {
            return state;
        }
        case DELETE_BOOK: {
            return state;
        }
        case MOVE_BOOK: { // again, may not need if we handle this condition in ADD
            return state;
        }
        default:
            return state;
    }
}