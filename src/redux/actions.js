import {SEARCH} from './actionTypes'

export const search = (query) => ({
    type: SEARCH,
    payload: query
})