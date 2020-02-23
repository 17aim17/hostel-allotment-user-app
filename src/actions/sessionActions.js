import { GET_SESSION } from './types'

import { database } from '../firebase/firebase'

export const getSessions = () => (dispatch, getState) => {
    return database.ref('sessions').on('value', snapshot => {
        console.log(snapshot.val());
        dispatch({
            type: GET_SESSION,
            payload: snapshot.val()
        })
    })
}