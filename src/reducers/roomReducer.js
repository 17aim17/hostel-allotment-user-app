import { SET_HOSTELS } from '../actions/types'
const initialState = []

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOSTELS:
            const rooms = action.payload
            return [...rooms]
        default:
            return state
    }
}

export default roomReducer