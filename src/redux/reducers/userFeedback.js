import {
    HANDLE_ADD_TWICE_ERROR, HANDLE_DELETE_ERROR, HANDLE_UPDATE_ERROR, HANDLE_GET_ERROR,
    RESET_ERROR, HANDLE_SUCCESS, HANDLE_API_ERROR, HANDLE_SEARCH_DISPLAY_ERROR
} from "../actionTypes";
import {
    feedbackInitialState, UI_FLAG_RESOLVED, UI_FLAG_SUCCESS, UI_FLAG_DELETE_ERROR,
    UI_FLAG_ADD_BOOK_TWICE, UI_FLAG_UPDATE_ERROR, UI_FLAG_GET_FAIL, UI_FLAG_API_ERROR, UI_FLAG_DISPLAY_ERROR
} from "../../constants";

export default function uiFeedback(state = feedbackInitialState, action) {
    switch (action.type) {
        case HANDLE_SUCCESS: {
            return { flag: UI_FLAG_SUCCESS }
        } case HANDLE_API_ERROR: {
            return { flag: UI_FLAG_API_ERROR };
        } case HANDLE_SEARCH_DISPLAY_ERROR: {
            return { flag: UI_FLAG_DISPLAY_ERROR };
        } case HANDLE_GET_ERROR: {
            return { flag: UI_FLAG_GET_FAIL };
        } case HANDLE_UPDATE_ERROR: {
            return { flag: UI_FLAG_UPDATE_ERROR };
        } case HANDLE_ADD_TWICE_ERROR: {
            return { flag: UI_FLAG_ADD_BOOK_TWICE };
        } case HANDLE_DELETE_ERROR: {
            return { flag: UI_FLAG_DELETE_ERROR };
        } case RESET_ERROR: {
            return { flag: UI_FLAG_RESOLVED };
        } default:
            return state;
    }
}
