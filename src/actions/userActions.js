
import { REGISTER, LOGIN, LOGOUT } from './types'

import { database } from '../firebase/firebase'

import history from '../routers/history'

export const register = (data) => (dispatch, getState) => {
    console.log(data);
    data.roomInfo = {
        isAlloted: false,
        room_number: null
    }
    database.ref('users').push(data).then((ref) => {
        dispatch({
            type: REGISTER,
            payload: ref.key
        })
    })
}

export const login = () => {
    return {
        type: LOGIN,
        payload: {
            uid: '-M0xI8iy5fqdhHSjsxGV',
            roomInfo: {
                isAlloted: false,
                room_number: null
            }
        }
    }
}