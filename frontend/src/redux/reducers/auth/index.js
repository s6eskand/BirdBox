import {
    AUTH_REGISTER,
    AUTH_LOGIN,
    AUTH_LOGOUT
} from "../../constants/auth";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer
} from "redux-persist";
import {
    AUTH_KEY
} from "../../constants/keys";

const initialState = {
    token: null,
    loading: null,
    isAuthenticated: false
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGOUT:
            return {
                ...state,
                token: action.token,
                isAuthenticated: action.isAuthenticated
            };
        case AUTH_LOGIN:
            return {
                ...state,
                token: action.token,
                isAuthenticated: action.isAuthenticated
            };
        case AUTH_REGISTER:
            return {
                ...state,
                token: action.token,
                isAuthenticated: action.isAuthenticated
            };
        default:
            return state
    }
};

const config = {
    key: AUTH_KEY,
    storage: storage,
    whitelist: ['token', 'isAuthenticated',],
};

export default persistReducer(config, auth);