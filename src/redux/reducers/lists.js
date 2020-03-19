import { ADD_BOOK, MOVE_BOOK, DELETE_BOOK } from "../actionTypes";
import { listsInitialState } from '../../constants';


export default function list(state = listsInitialState, action) {
    switch (action.type) {
        case ADD_BOOK: {
            return state;
        }
        case DELETE_BOOK: {
            if( action.bookListType === "ToRead"){
                return Object.assign({}, state, {
                    toRead: 
                    [
                        {
                            title: "Changed",
                            author: "Changed",
                            id: 1 
                        }   
                    ]
                    // toRead: state.toRead.filter((book) => book.id !== 20
                    // )
                        ,
                    haveRead: 
                        [{
                            title: "Not",
                            author: "Not",
                            id: 1
                        }]
                })

            }
            else if (action.bookListType === "HaveRead") {
                return Object.assign({}, state, {
                toRead:[
                    {
                        title: "Not",
                        author: "Not",
                        id: 1
                    }],
                haveRead: 
                    [{
                        title: "Changed",
                        author: "Changed",
                        id: 1
                    }]
                })
            }
            return state;

        }
        case MOVE_BOOK: { // again, may not need if we handle this condition in ADD
            return state;
        }
        default:
            return state;
    }
}

