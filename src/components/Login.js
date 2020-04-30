import React, { Component } from 'react';
import { connect } from 'react-redux'
import { startLogin } from '../actions/userActions'
class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.startLogin(this.state)
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="card mx-auto col-xs-6 col-sm-6">
                    <div className="card-body">
                        <h3 className="card-title border-bottom pb-2"> <i className="fas fa-user-lock"></i> Student Login</h3>
                        <form className="mt-3" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block btn-primary"> <i className="fas fa-sign-in-alt"></i> Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { startLogin })(Login);
