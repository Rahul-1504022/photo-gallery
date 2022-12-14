import * as actionType from "./actionTypes";
import axios from "axios";

export const authSuccess = (token, userId) => {
    return {
        type: actionType.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId,
        }
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("userId");
    return {
        type: actionType.AUTH_LOGOUT,
    }
}

export const authCheck = () => dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
        dispatch(logout());
    } else {
        const expirationTime = new Date(localStorage.getItem("expirationTime"));
        if (expirationTime <= new Date()) {
            dispatch(logout());
        }
    }
}

export const auth = (email, password, mode) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        }
        let authUrl = null;
        if (mode === "Sign Up") {
            authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
        } else {
            authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
        }
        const API_KEY = "AIzaSyCtC-TfcIhFCGYNfIDCQ6cJkKFxbW6egYM";
        axios.post(authUrl + API_KEY, authData)
            .then(response => {
                localStorage.setItem("token", response.data.idToken);
                localStorage.setItem("userId", response.data.localId);
                const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem("expirationTime", expirationTime);
                dispatch(authSuccess(response.data.idToken, response.data.localId))
            })
            .catch(errors => {
                // dispatch(authFailed(errors.response.data.error.message));
            });
    }
}