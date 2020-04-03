export const searchInitialState = { queryResult: [] };

export const listsInitialState = {
    toRead: [],
    haveRead: []
}

export const MARK_TO_READ_BUTTON = "Mark As Not Read"
export const MARK_HAVE_READ_BUTTON = "Mark As Read"

//UI feedback constants
export const UI_FLAG_RESOLVED = "UI FLAG RESOLVED";
export const UI_FLAG_SUCCESS = "UI FLAG SUCCESS";

export const UI_FLAG_GET_FAIL = "UI FLAG FAILED TO RETRIEVE LISTS";
export const UI_FLAG_UPDATE_ERROR = "UI FLAG UPDATE ERROR";
export const UI_FLAG_DELETE_ERROR = "UI FLAG DELETE ERROR";
export const UI_FLAG_ADD_BOOK_TWICE = "UI FLAG ADD BOOK TWICE ERROR";
export const UI_FLAG_API_ERROR = "UI FLAG API ERROR";
export const UI_FLAG_DISPLAY_ERROR = "UI FLAG DISPLAY ERROR";

export const feedbackInitialState = { flag: UI_FLAG_SUCCESS, message: "" };
