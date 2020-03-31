export const searchInitialState = { queryResult: [] };

export const listsInitialState = {
    toRead: [
        {
            title: "",
            author: "",
            id: 1
        },
    ],
    haveRead: [
        {
            title: "",
            author: "",
            id: 4
        }
    ]
}

export const MARK_TO_READ_BUTTON = "Mark As Not Read"
export const MARK_HAVE_READ_BUTTON = "Mark As Read"

//UI feedback constants
export const UI_FLAG_RESOLVED = "UI FLAG RESOLVED";
export const UI_FLAG_SUCCESS = "UI FLAG SUCCESS";
export const UI_FLAG_LIST_FAIL = "UI FLAG FAILED TO RETRIEVE LISTS";
export const UI_FLAG_ADD_BOOK_TWICS = "UI FLAG ADD BOOK TWICE";

export const feedbackInitialState = { flag: UI_FLAG_RESOLVED };
