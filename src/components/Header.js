import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { startLogout } from '../actions/userActions'

class Header extends Component {
    getLinks = () => {
        if (this.props.isLoggedIn) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link btn text-white" activeClassName="btn-outline-info" to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link btn text-white" activeClassName="btn-outline-info" to="/allotment">Allot Room</NavLink>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link btn text-white" onClick={this.props.startLogout} >Log Out</p>
                    </li>
                </>
            )
        }
        return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link btn text-white" activeClassName="btn-outline-info" to="/register">Register</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link btn text-white" activeClassName="btn-outline-info" to="/login">Login</NavLink>
                </li>
            </>
        )
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <NavLink className="navbar-brand" to="/dashboard">Hostel Dcrust</NavLink>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            {this.getLinks()}
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: !!state.user.uid
    }
}

export default connect(mapStateToProps, { startLogout })(Header)