import { SET_HOSTELS } from '../actions/types'
const initialState = []

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOSTELS:
            return [...action.payload]
        default:
            return state
    }
}

export default roomReducer