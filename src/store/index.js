import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import roomReducer from '../reducers/roomReducer'
import branchReducer from '../reducers/branchReducer'
import sessionReducer from '../reducers/sessionReducer'
import userReducer from '../reducers/userReducer'

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            rooms: roomReducer,
            branch: branchReducer,
            session: sessionReducer,
            user: userReducer,
        }),
        composeEnhanchers(applyMiddleware(thunk))
    );
    return store;
}