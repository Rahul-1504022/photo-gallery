import * as actionTypes from './actionTypes';
import { COMMNENTS } from "../data/Comments";

const INITIAL_STATE = {
    Photo: [],
    Comments: COMMNENTS,
}

export const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHOTOS:
            return {
                ...state,
                Photo: action.payload,
            }

        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.Comments.length + 1;
            return {
                ...state,
                Comments: state.Comments.concat(comment),
            }
        // return state.Comments.concat(newComment);

        default:
            return state
    }
}