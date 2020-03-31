import { HANDLE_ERROR, RESET_ERROR } from "../actionTypes";
import { feedbackInitialState, UI_FLAG_RESOLVED } from "../../constants";

export default function lifeedback(state = feedbackInitialState, action) {
    switch (action.type) {
        case HANDLE_ERROR: {
            return { flag: action.payload.flag };
        } case RESET_ERROR: {
            return { flag: UI_FLAG_RESOLVED }
        }
        default:
            return state;
    }
}
