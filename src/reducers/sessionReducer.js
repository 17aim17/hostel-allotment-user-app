import { SET_SESSION } from '../actions/types'
const initialState = {}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSION:
            return { ...action.payload }
        default:
            return state
    }
}

export default sessionReducer