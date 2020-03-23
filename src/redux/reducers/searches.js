import { SEARCH } from '../actionTypes';
import { searchInitialState } from '../../constants';
import { DELETE_SEARCH_BOOK } from '../actionTypes';

export default function searches(state = searchInitialState, action) {
    switch (action.type) {
        case SEARCH: {
            console.log("---SEARCH--- " + action.payload);
            return { ...state, search: action.payload };
        }
        case DELETE_SEARCH_BOOK:{
            return Object.assign({}, state, {
                queryResult: state.queryResult.filter((book) => book.id !== action.bookInfo.id)
            })
        }
        default:
            return state;
    }
}