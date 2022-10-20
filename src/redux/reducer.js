import * as actionTypes from './actionTypes';
import { COMMNENTS } from "../data/Comments";
import axios from 'axios';


const INITIAL_STATE = {
    Photo: [],
    // Comments: [],COMMNENTS,
    Comments: [],
    LoggedIn: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    userId: localStorage.getItem("userId") ? localStorage.getItem("userId") : null,
}

export const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHOTOS:
            return {
                ...state,
                Photo: action.payload,
            }

        case actionTypes.ADD_COMMENT:
            return {
                ...state,
                Comments: state.Comments.concat(action.payload),
            }
        // return state.Comments.concat(newComment);

        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                LoggedIn: true,
            }

        case actionTypes.AUTH_LOGOUT:
            return state;

        case actionTypes.LOAD_COMMENTS:
            let comments = [];
            for (let key in action.payload) {
                comments.push({
                    ...action.payload[key],
                    id: key,
                })
            }
            return {
                ...state,
                Comments: comments,

            }

        default:
            return state
    }
}