import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

import Spinner from './Spinner'

import { allotRoom } from '../actions/userActions'

class Allotment extends Component {
    state = {
        selectedRoom: null,
        error: null
    }

    handelAllot = () => {
        if (!this.state.selectedRoom) {
            this.setState({
                ...this.state,
                error: "Select a room!"
            })
        } else {
            // console.log("submitted " + this.state.selectedRoom);
            this.props.allotRoom(this.state.selectedRoom)
        }

    }

    handelSelect = (id) => {
        console.log("clicked " + id);

        this.setState({
            ...this.state,
            selectedRoom: id
        })
    }

    renderIndividualRoom = ({ roomNumber, obj, occupancy }) => {
        let num = parseInt(obj.value)
        if (!obj.occupied) {
            let id = roomNumber
            let label = roomNumber
            if (occupancy > 1) {
                id = id + ":" + num
                label += String.fromCharCode(64 + num)
            }
            let className = "col btn btn-outline-dark m-1"
            if (this.state.selectedRoom === id) {
                className = "col btn btn-dark m-1"
            }
            return (
                <div className={className} key={id} onClick={() => this.handelSelect(id)}>
                    {label}
                </div>
            )
        }
        return null

    }

    renderRooms = (roomsData) => {
        const { rooms, name } = roomsData
        return (
            <div className="container mt-4">
                <h3 className="text-center"><i className="fas fa-hotel"></i> {this.props.hostelAlloted + ' ' + name}</h3>
                {this.state.error && <div className="alert alert-warning" role="alert">{this.state.error}</div>}
                <div className="row mt-4">
                    {
                        rooms.map(room => {
                            const { roomNumber, occupancy } = room
                            return occupancy.map(obj => {
                                return this.renderIndividualRoom({ roomNumber, obj, occupancy: occupancy.length })
                            })

                        })
                    }
                </div>
                <div className="mt-3 text-center">
                    {this.state.error && <div className="alert alert-warning" role="alert">{this.state.error}</div>}
                    <button className="btn btn-primary btn-lg"
                        onClick={this.handelAllot}
                    >
                        <i className="fas fa-key"></i>
                     Allot Room
                     </button>
                </div>

            </div>
        )

    }

    render() {

        if (!_.isEmpty(this.props.session) && !this.props.session.allocate.state) {
            return (
                <div className="container mt-5 text-center">
                    <h3 className="text-danger"> Allotment hasn't started yet</h3>
                </div>
            )
        }
        else if (!_.isEmpty(this.props.user) && this.props.user.roomInfo.isAlloted) {
            const { room_number, hostel } = this.props.user.roomInfo
            return (
                <div className=" container mt-5 text-center">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-success"> Allotment Successfull </h2>
                            <h3><span>Your Hostel Name :  </span> <span className="text-success">{hostel}</span> </h3>
                            <h3><span>Your Room number : </span> <span className="text-success">{room_number}</span></h3>
                        </div>
                    </div>
                </div>
            )
        }

        else if (!_.isEmpty(this.props.rooms) && this.props.hostelAlloted) {
            return this.renderRooms(this.props.rooms)
        }

        return <Spinner />
    }
}

const mapSateToProps = (state) => {
    let rooms = {}
    let hostelAlloted = null
    if (!_.isEmpty(state.user) && !_.isEmpty(state.branch) && !_.isEmpty(state.rooms)) {
        const { branch, year, gender } = state.user;
        hostelAlloted = state.branch[branch][year][gender]
        rooms = state.rooms[hostelAlloted]
    }
    return {
        user: state.user,
        hostelAlloted: hostelAlloted,
        rooms: { ...rooms },
        session: state.session
    }
}

export default connect(mapSateToProps, { allotRoom })(Allotment);
