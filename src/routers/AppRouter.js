import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'

import history from './history'

import Header from '../components/Header'
import App from '../components/App'
import Register from '../components/Register'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import Allotment from '../components/Allotment'
import NotFound from '../components/NotFound'

import { getSessions } from '../actions/sessionActions'
import { login } from '../actions/userActions'

class AppRouter extends Component {
    componentDidMount() {
        this.props.getSessions()
        // this.props.login()
    }
    render() {
        return (
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/register" component={Register} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/dashboard" component={Dashboard} exact />
                    <Route path="/allotment" component={Allotment} exact />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}


export default connect(null, { getSessions, login })(AppRouter)