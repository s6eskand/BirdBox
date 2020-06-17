import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import  {
    persistStore
} from "redux-persist";


const middleware = [
    thunk,
];

const storeMonitor = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    storeMonitor(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);