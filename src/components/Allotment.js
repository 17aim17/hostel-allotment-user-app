import React, { Component } from 'react';
import { connect } from 'react-redux'

class Allotment extends Component {

    renderInfo() {
        console.log(this.props.rooms);

        if (this.props.rooms.length === 0) {
            return (
                <div>
                    Loading
                </div>
            )
        }
        else {

            return (
                <div>
                    <p>{this.props.rooms[0].id}</p>
                    <p>{this.props.rooms[0].name}</p>
                    {this.props.rooms[0].rooms.map(room => {

                        return <div>
                            <input type="radio" name="room" value={room.roomNumber} />
                            {room.roomNumber}
                        </div>
                    })
                    }
                </div>
            )
        }
    }

    render() {
        return this.renderInfo()
    }
}

const mapSateToProps = (state) => {
    console.log(state.rooms);

    return {
        user: state.user,
        rooms: state.rooms
    }
}

export default connect(mapSateToProps, null)(Allotment);
