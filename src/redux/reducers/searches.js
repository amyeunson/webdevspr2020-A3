import { SEARCH } from "../actionTypes";
import { searchesInitialState } from '../../constants'

export default function (state = searchesInitialState, action) {
    switch (action.type) {
        case SEARCH: {
            return state;
        }
        default:
            return state;
    }
}