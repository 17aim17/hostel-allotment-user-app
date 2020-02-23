import { REGISTER } from '../actions/types'

const initialState = {

}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            const uid = action.payload
            return { uid }
        default:
            return state
    }
}

export default userReducer