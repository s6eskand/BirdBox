import {
    AUTH_FAIL,
    AUTH_LOGOUT,
    AUTH_START,
    AUTH_SUCCESS,
} from "../../constants/auth";
import axios from 'axios';

const handleResponse = (res) => {
    const token = res.data.key;
    const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate);

    dispatch(authSuccess(token));
    dispatch(checkAuthTimeout(3600));
};

export const authStart = () => {
    return {
        type: AUTH_START
    }
};

export const authSuccess = (token) => {
    return {
        type: AUTH_SUCCESS,
        token: token
    }
};

export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        error: error
    }
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
};

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTH_START
    }
};

export const authLogin = (username, email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/api/auth/login', {
            username: username,
            email: email,
            password: password
        })
            .then(res => {
                handleResponse(res)
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
};

export const authRegister = (username, email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/api/auth/register', {
            username: username,
            email: email,
            password: password
        })
            .then(res => {
                handleResponse(res)
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
};