import { SEARCH } from "../actionTypes";
import { searchInitialState } from '../../constants'

export default function searches(state = searchInitialState, action) {
    switch (action.type) {
        case SEARCH: {
            console.log("---SEARCH--- " + action.payload);
            return { ...state, search: action.payload };
        }
        default:
            return state;
    }
}