import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import store from './store'

import { getSessions } from './actions/sessionActions'
import { startSetHostel } from './actions/roomActions'
import { startSetBranch } from './actions/branchAction'
import { login, logout } from './actions/userActions'
import { firebase } from './firebase/firebase'

const reduxStore = store()
reduxStore.dispatch(getSessions())
reduxStore.dispatch(startSetBranch())
reduxStore.dispatch(startSetHostel())


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user);
        reduxStore.dispatch(login(user.uid));
    } else {
        reduxStore.dispatch(logout());
    }
});


ReactDOM.render(<Provider store={reduxStore}> <AppRouter /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
