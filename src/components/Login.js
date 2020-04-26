import React, { Component } from 'react';

class Login extends Component {
    onSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="card mx-auto col-xs-6 col-sm-6">
                    <div className="card-body">
                        <h3 className="card-title border-bottom pb-2"> <i className="fas fa-user-lock"></i> Student Login</h3>
                        <form className="mt-3" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Roll Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block btn-outline-primary"> <i className="fas fa-sign-in-alt"></i> Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
