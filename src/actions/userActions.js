import generatePassword from 'password-generator'

import { REGISTER, LOGIN, LOGOUT } from './types'

import { database } from '../firebase/firebase'

import history from '../routers/history'

export const register = (data) => (dispatch, getState) => {
    console.log(data);
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
        payload: '1234567'
    }
}