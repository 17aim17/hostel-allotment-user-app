import { REGISTER, LOGIN, ALLOT_ROOM } from '../actions/types'

const initialState = {}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            console.log(action.payload);
            return { ...action.payload }
        case LOGIN:
            return { ...action.payload }
        case ALLOT_ROOM:
            return { ...state, ...action.payload }
        default:
            return state
    }
}


export default userReducer