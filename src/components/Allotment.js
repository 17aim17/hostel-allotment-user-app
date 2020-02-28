import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

import Spinner from './Spinner'

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
            console.log("submitted " + this.state.selectedRoom);
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
            const id = roomNumber + ":" + num
            let label = roomNumber
            if (occupancy > 1) {
                label += String.fromCharCode(64 + num)
            }
            let className = "col btn btn-outline-primary m-1 hover "
            if (this.state.selectedRoom === id) {
                className += "bg-primary text-light"
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
        const { id, rooms, name } = roomsData
        return (
            <div className="container mt-2">
                <h3 className="text-center">{id + ' ' + name}</h3>
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
                <div className="mt-3">
                    {this.state.error && <div className="alert alert-warning" role="alert">{this.state.error}</div>}
                    <button className="btn btn-info btn-block btn-lg" onClick={this.handelAllot}>Allot Room</button>
                </div>

            </div>
        )

    }

    render() {
        if (!_.isEmpty(this.props.session) && !this.props.session.allocate) {
            return (
                <div className="container mt-5 text-info ">Allotment hasn't started yet</div>
            )
        }
        else if (!_.isEmpty(this.props.user) && this.props.user.roomInfo.isAlloted) {
            const { room_number } = this.props.user.roomInfo
            return (
                <div>
                    <div className="container mt-5 text-info ">You are alloted Room no. {room_number}</div>
                </div>
            )
        }

        else if (!_.isEmpty(this.props.rooms) && this.props.rooms.id !== null) {
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
        rooms: { id: hostelAlloted, ...rooms },
        sessions: state.sessions
    }
}

export default connect(mapSateToProps, null)(Allotment);
