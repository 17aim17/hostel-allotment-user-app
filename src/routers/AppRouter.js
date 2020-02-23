import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'

import history from './history'

import App from '../components/App'
import Register from '../components/Register'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import Allotment from '../components/Allotment'
import NotFound from '../components/NotFound'

import { getSessions } from '../actions/sessionActions'

class AppRouter extends Component {
    componentDidMount() {
        this.props.getSessions()
    }
    render() {
        return (
            <Router history={history}>
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


export default connect(null, { getSessions })(AppRouter)