import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import store from './store'

import { getSessions } from './actions/sessionActions'
import { startSetHostel } from './actions/roomActions'
import { login } from './actions/userActions'

const reduxStore = store()
reduxStore.dispatch(getSessions())
reduxStore.dispatch(login())
reduxStore.dispatch(startSetHostel())

ReactDOM.render(<Provider store={reduxStore}> <AppRouter /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
