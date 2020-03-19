import { combineReducers } from "redux";
import searches from './searches';
import list from "./lists";

export default combineReducers({
    search: searches, // search: string
    bookLists: list // toRead: [bookInfo], haveRead: [bookItem]
});
