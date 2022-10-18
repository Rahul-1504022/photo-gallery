import * as actionTypes from './actionTypes';
import { Photo } from '../data/Photo';

export const loadPhotos = () => {
    return {
        type: actionTypes.LOAD_PHOTOS,
        payload: Photo,
    }
}

export const addComment = (photoId, comment, userName) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: {
            photoId: photoId,
            comment: comment,
            author: userName,
        },
    }
}