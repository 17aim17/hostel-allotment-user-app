import React, { Component } from 'react';
import { connect } from 'react-redux'
import { register } from '../actions/userActions'

// let initialState = {
//     full_name: '',
//     email: '',
//     roll_number: '',
//     gender: '',
//     course: '',
//     branch: '',
//     year: '',
//     address: '',
//     primary_contact: '',
//     father_name: '',
//     mother_name: '',
//     parent_contact: '',
//     aadhaar_number: '',
//     account_number: '',
//     password: '',
//     confirm_password: ''
// }
import initialState from '../fakedata/fake'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = { ...initialState }

    }

    onChange = (e) => {
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault()
        const data = { ...this.state }
        delete data["confirm_password"]
        this.props.register(data)
    }
    render() {
        return (
            <div className="container border my-4 p-0">
                <h2 className="card-title text-center p-2 bg-primary text-light">Register</h2>
                <form onSubmit={this.onSubmit} autoComplete="off" className="p-sm-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="full_name">Full Name</label>
                                <input type="text" className="form-control" name="full_name" value={this.state.full_name} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="roll_number">Enrollment number</label>
                                <input type="text" className="form-control" name="roll_number" value={this.state.roll_number} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select className="form-control" name="gender" value={this.state.gender} onChange={this.onChange}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="course">Course</label>
                                <input type="text" className="form-control" name="course" value={this.state.course} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="branch">Branch</label>
                                <input type="text" className="form-control" name="branch" value={this.state.branch} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="year">Year</label>
                                <select className="form-control" name="year" value={this.state.year} onChange={this.onChange}>
                                    <option value="">Select Year</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Permanent Address</label>
                                <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="primary_contact">Primary Contact no. </label>
                                <input type="text" className="form-control" name="primary_contact" value={this.state.primary_contact} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="father_name">Father's Name</label>
                                <input type="text" className="form-control" name="father_name" value={this.state.father_name} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mother_name">Mother's Name</label>
                                <input type="text" className="form-control" name="mother_name" value={this.state.mother_name} onChange={this.onChange} />
                            </div>


                            <div className="form-group">
                                <label htmlFor="parent_contact">Parent's Contact </label>
                                <input type="text" className="form-control" name="parent_contact" value={this.state.parent_contact} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="aadhaar_number">Aadhaar Card no.</label>
                                <input type="text" className="form-control" name="aadhaar_number" value={this.state.aadhaar_number} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="account_number">Account no.</label>
                                <input type="text" className="form-control" name="account_number" value={this.state.account_number} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input type="password" className="form-control" name="confirm_password" value={this.state.confirm_password} onChange={this.onChange} />
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <button className="btn btn-block btn-primary btn-lg">Register</button>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isRegistered: state.user.uid || null
    }
}

export default connect(mapStateToProps, { register })(Register);
