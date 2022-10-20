import * as actionTypes from './actionTypes';
import { Photo } from '../data/Photo';
import axios from 'axios';

export const loadPhotos = () => {
    return {
        type: actionTypes.LOAD_PHOTOS,
        payload: Photo,
    }
}


// export const addComment = (photoId, comment, userName) => {
//     return {
//         type: actionTypes.ADD_COMMENT,
//         payload: {
//             photoId: photoId,
//             comment: comment,
//             author: userName,
//         },
//     }
// }

export const addComment = ({ photoId, comment, author, userId, id }) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: {
            photoId: photoId,
            comment: comment,
            author: author,
            userId: userId,
            id: id,
        },
    }
}

export const loadComments = (comments) => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: comments
    }
}

export const loadAllComments = () => dispatch => {
    axios.get("https://photo-gallery-9653c-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json")
        .then(response => {
            dispatch(loadComments(response.data))
        })
        .catch(error => console.log(error))
}


export const addNewComment = (photoId, comment, userName, userId) => dispatch => {
    let newComment = {
        userId: userId,
        photoId: photoId,
        author: userName,
        comment: comment
    }
    axios.post("https://photo-gallery-9653c-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json", newComment)
        .then(response => {
            if (response.status === 200) {
                let newAddedComment = JSON.parse(response.config.data);
                newAddedComment.id = response.data;
                dispatch(addComment(newAddedComment));
            }
        })
        .catch(error => console.log(error))

}