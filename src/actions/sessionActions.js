import { SET_SESSION } from './types'

import { database } from '../firebase/firebase'

export const getSessions = () => (dispatch, getState) => {
    return database.ref('sessions').on('value', snapshot => {
        dispatch({
            type: SET_SESSION,
            payload: snapshot.val()
        })
    })
}