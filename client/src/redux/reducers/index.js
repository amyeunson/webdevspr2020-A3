import { combineReducers } from "redux";
import searches from './searches';
import list from "./lists";
import uiFeedback from './userFeedback';

export default combineReducers({
    search: searches, // queryResult: [bookInfo]
    bookLists: list, // toRead: [bookInfo], haveRead: [bookItem]
    userFeedback: uiFeedback
});
