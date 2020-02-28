
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
            uid: '-M1BWepeA0gb6DURO1J7',
            roomInfo: {
                isAlloted: false,
                room_number: null
            }
        }
    }
}