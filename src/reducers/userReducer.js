import { REGISTER, LOGIN, ALLOT_ROOM, LOGOUT } from '../actions/types'

const initialState = {}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return { ...action.payload }
        case LOGIN:
            return { ...action.payload }
        case ALLOT_ROOM:
            return { ...state, roomInfo: { ...action.payload } }
        case LOGOUT:
            return initialState
        default:
            return state
    }
}


export default userReducer