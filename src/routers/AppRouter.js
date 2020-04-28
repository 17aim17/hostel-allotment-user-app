import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import history from './history'

import Header from '../components/Header'
import App from '../components/App'
import Register from '../components/Register'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import Allotment from '../components/Allotment'
import NotFound from '../components/NotFound'

class AppRouter extends Component {

    render() {
        return (
            <Router history={history}>
                <Header />
                <Switch>
                    <PublicRoute path="/" component={App} exact />
                    <PublicRoute path="/register" component={Register} exact />
                    <PublicRoute path="/login" component={Login} exact />
                    <PrivateRoute path="/dashboard" component={Dashboard} exact />
                    <PrivateRoute path="/allotment" component={Allotment} exact />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}


export default AppRouter