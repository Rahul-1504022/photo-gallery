import * as actionTypes from './actionTypes';
import { Photo } from '../data/Photo';

export const loadPhotos = () => {
    return {
        type: actionTypes.LOAD_PHOTOS,
        payload: Photo,
    }
}