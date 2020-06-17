import {
    createSelector
} from 'reselect';

export const loginTokenSelector = createSelector(state => state && state.auth && state.auth.token, loginTokenSelector => loginTokenSelector);
export const loginAuthSelector = createSelector(state => state && state.auth && state.auth.isAuthenticated, loginAuthSelector => loginAuthSelector);
export const logoutSelector = createSelector(state => state && state.auth && state.auth.token, logoutSelector => logoutSelector);
export const registerTokenSelector = createSelector(state => state && state.auth && state.auth.token, registerTokenSelector => registerTokenSelector);
export const registerAuthSelector = createSelector(state => state && state.auth && state.auth.isAuthenticated, registerAuthSelector => registerAuthSelector);

