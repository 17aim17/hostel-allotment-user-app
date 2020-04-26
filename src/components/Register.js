import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux'
import { register } from '../actions/userActions'
import formValidator from '../utils/validation'
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
//     confirm_password: '',
// }
import initialState from '../fakedata/fake'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = { ...initialState, isError: false, errors: {} }

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
        const formData = { ...this.state }
        delete formData["errors"]

        const { isError, data, errors } = formValidator(formData)
        if (isError) {
            this.setState({ ...this.state, isError, errors: errors })
        }
        else {
            this.props.register(data)
        }
    }

    renderInput(label, text, type) {
        const error = this.state.errors[label]
        let className = "form-control"
        if (error) {
            className += ' is-invalid'
        }

        return (
            <div className="form-group">
                <label htmlFor={label}>{text}</label>
                <input type={type} className={className} name={label} value={this.state[label]} onChange={this.onChange} />
                {error && <div className="invalid-feedback">
                    {error}
                </div>}
            </div>
        )
    }

    renderBranch() {

        const error = this.state.errors['branch']
        let className = "form-control"
        if (error) {
            className += ' is-invalid'
        }

        return (
            <div className="form-group">
                <label htmlFor="branch">Branch</label>
                <select className={className} name="branch" value={this.state.branch} onChange={this.onChange}>
                    <option value="">Select Branch</option>
                    {
                        Object.keys(this.props.branch).map(b => <option key={b} value={b}>{b}</option>)
                    }
                </select>
                {error && <div className="invalid-feedback">
                    {error}
                </div>}
            </div>


        )

    }

    renderYear() {
        const error = this.state.errors['year']
        let className = "form-control"
        if (error) {
            className += ' is-invalid'
        }

        let year = [];
        const { branch } = this.state
        if (branch && !_.isEmpty(this.props.branch)) {
            year = Object.keys(this.props.branch[branch])
        }
        return (
            <div className="form-group">
                <label htmlFor="year">Year</label>
                <select className={className} name="year" value={this.state.year} onChange={this.onChange}>
                    <option value="">Select Year</option>
                    {
                        year.map(y => <option value={y} key={y}>{y}</option>)
                    }
                </select>
                {error && <div className="invalid-feedback">
                    {error}
                </div>}
            </div>
        )
    }

    render() {
        return (
            <div className="container my-4 card card-body">
                <h2 className="card-title mx-auto "> <i className="fas fa-users"></i>  Student Registration</h2>
                <form onSubmit={this.onSubmit} autoComplete="off" className="p-sm-4 needs-validation" noValidate>
                    {this.state.isError && <div className="alert alert-warning" role="alert">
                        Fix all the errors please</div>}
                    <div className="row">
                        <div className="col-sm-6">
                            {this.renderInput('full_name', 'Full Name', 'text')}
                            {this.renderInput('email', 'Email', 'email')}
                            {this.renderInput('roll_number', 'Enrollment Number', 'text')}

                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select className="form-control" name="gender" value={this.state.gender} onChange={this.onChange}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            {/* {this.renderInput('course', 'Course', 'text')} */}
                            {this.renderBranch()}
                            {this.renderYear()}
                            {this.renderInput('address', 'Permanent Address', 'text')}
                            {this.renderInput('primary_contact', 'Primary Contact', 'text')}
                        </div>
                        <div className="col-sm-6">
                            {this.renderInput('father_name', 'Father\'s name ', 'text')}
                            {this.renderInput('mother_name', 'Mother\'s name ', 'text')}
                            {this.renderInput('parent_contact', 'Parent Contact', 'text')}
                            {this.renderInput('aadhaar_number', 'Aadhaar Card Number', 'text')}
                            {this.renderInput('account_number', 'Bank Account Number', 'text')}
                            {this.renderInput('password', 'Password', 'password')}
                            {this.renderInput('confirm_password', 'Confirm Password', 'password')}
                        </div>
                    </div>
                    {this.state.isError && <div className="alert alert-warning" role="alert">
                        Fix all the errors please</div>}
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <button className="btn btn-block btn-primary btn-lg"> <i className="far fa-paper-plane"></i> Register</button>
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
        isRegistered: state.user.uid || null,
        branch: state.branch
    }
}

export default connect(mapStateToProps, { register })(Register);
