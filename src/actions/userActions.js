import generatePassword from 'password-generator'

import { REGISTER, LOGIN, LOGOUT } from './types'

import { database } from '../firebase/firebase'

import history from '../routers/history'
export const register = (data) => (dispatch, getState) => {

    data.credential = {
        username: data.rollNo,
        password: generatePassword(8, false)
    }
    console.log(data);

    database.ref('users').push(data).then((ref) => {
        dispatch({
            type: REGISTER,
            payload: ref.key
        })
    })
}