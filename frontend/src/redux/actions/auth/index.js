import {
    AUTH_LOGOUT,
    AUTH_LOGIN,
    AUTH_REGISTER,
} from "../../constants/auth";

export const login = (token) => ({
    type: AUTH_LOGIN,
    token: token,
    isAuthenticated: true
});

export const logout = () => ({
    type: AUTH_LOGOUT,
    token: null,
    isAuthenticated: false
});

export const register = async (token) =>({
    type: AUTH_REGISTER,
    token: token,
    isAuthenticated: true
});