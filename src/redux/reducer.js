import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    Photo: []
}

export const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHOTOS:
            return {
                ...state,
                Photo: action.payload,
            }
        default:
            return state
    }
}