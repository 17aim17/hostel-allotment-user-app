import React, { Component } from 'react';
import { connect } from 'react-redux'
import { register } from '../actions/userActions'



class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            email: '',
            rollNo: '',
            gender: '',
            course: '',
            branch: '',
            year: '',
            address: '',
            primaryContact: '',
            fatherName: '',
            motherName: '',
            parentContact: '',
            aadhaar: '',
            account: ''
        }
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

        this.props.register(this.state)
    }
    render() {
        return (
            <div className="container my-4  ">

                <form onSubmit={this.onSubmit} autoComplete="off">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" className="form-control" name="fullName" value={this.state.fullName} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="rollNo">RollNo.</label>
                                <input type="text" className="form-control" name="rollNo" value={this.state.rollNo} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select className="form-control" name="gender" value={this.state.gender} onChange={this.onChange}>
                                    <option value="">Select Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
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
                                <label htmlFor="primaryContact">Primary Contact no. </label>
                                <input type="text" className="form-control" name="primaryContact" value={this.state.primaryContact} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="fatherName">Father's Name</label>
                                <input type="text" className="form-control" name="fatherName" value={this.state.fatherName} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="motherName">Mother's Name</label>
                                <input type="text" className="form-control" name="motherName" value={this.state.motherName} onChange={this.onChange} />
                            </div>


                            <div className="form-group">
                                <label htmlFor="parentContact">Parent's Contact </label>
                                <input type="text" className="form-control" name="parentContact" value={this.state.parentContact} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="aadhaar">Aadhaar Card no.</label>
                                <input type="text" className="form-control" name="aadhaar" value={this.state.aadhaar} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="account">Account no.</label>
                                <input type="text" className="form-control" name="account" value={this.state.account} onChange={this.onChange} />
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <button className="btn btn-block btn-success btn-lg">Register</button>
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
