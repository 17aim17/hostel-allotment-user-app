import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { branch, year, name, roll_number, gender, father_name, mother_name, hostel, room } = this.props
        return (
            <div className="container mt-3">
                <div className="text-center">
                    <Link className="btn btn-primary btn-lg" to="/allotment"> <i className="fas fa-hotel"></i> Allot Your Room</Link>
                </div>
                <div className="card card-body col-md-8 mx-auto mt-4">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th>Roll Number</th>
                                <td>{roll_number}</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>{gender}</td>
                            </tr>
                            <tr>
                                <th>Father's Name</th>
                                <td>{father_name}</td>
                            </tr>
                            <tr>
                                <th>Mother's Name</th>
                                <td>{mother_name}</td>
                            </tr>
                            <tr>
                                <th>Hostel Code </th>
                                <th className="text-success">{hostel}</th>
                            </tr>
                            <tr>
                                <th>Room Number</th>
                                <th className="text-success">{room}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        branch: state.user.branch,
        year: state.user.year,
        name: state.user.full_name,
        roll_number: state.user.roll_number,
        gender: state.user.gender,
        father_name: state.user.father_name,
        mother_name: state.user.mother_name,
        hostel: state.user.roomInfo.hostel,
        room: state.user.roomInfo.room_number
    }
}

export default connect(mapStateToProps, null)(Dashboard);
