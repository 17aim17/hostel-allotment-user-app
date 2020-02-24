import { REGISTER, LOGIN } from '../actions/types'

const initialState = {}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            const uid = action.payload
            return { uid }
        case LOGIN:
            const id = action.payload
            console.log(id);
            return { ...state, uid: id }
        default:
            return state
    }
}

export default userReducer