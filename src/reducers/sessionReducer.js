import { GET_SESSION } from '../actions/types'
const initialState = {}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SESSION:
            console.log('was here');

            return { ...action.payload }
        default:
            return state
    }
}

export default sessionReducer