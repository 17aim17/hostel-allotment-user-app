
import { REGISTER, LOGIN, LOGOUT, ALLOT_ROOM } from './types'

import { database, auth } from '../firebase/firebase'

import history from '../routers/history'


export const register = (data) => dispatch => {

    data.roomInfo = {
        isAlloted: false,
        hostel: null,
        room_number: null
    }

    const email = data.email
    const password = data.password

    delete data['password']
    delete data['isError']
    let uid;
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
        uid = auth.currentUser.uid;
        return database.ref(`users/${uid}`).set(data)
    }).then(() => {
        dispatch({
            type: REGISTER,
            payload: {
                uid,
                ...data
            }
        })
        history.push('/dashboard')
        window.alert('You are registered successfully')
    }).catch(e => {
        window.alert(e.message)
        console.log(e.message);
    })
}

export const login = (uid) => dispatch => {
    return database.ref(`users/${uid}`).once('value').then((snapshot) => {
        dispatch({
            type: LOGIN,
            payload: {
                uid,
                ...snapshot.val()
            }
        })
        history.push('/dashboard')
    })
}

export const startLogin = (data) => dispatch => {
    const { email, password } = data
    auth.signInWithEmailAndPassword(email, password).then(() => {
        login(auth.currentUser.uid)
    }).catch(e => {
        console.log(e.message);
        window.alert(e.message)
        history.push('/login')
    })

}

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const startLogout = () => dispatch => {
    auth.signOut()
    history.push('/')
    dispatch(logout())
};


const roomNumberAndOccupancyResolve = (id) => {
    const data = {
        room_num: null,
        room_num_occ: null,
        alphabet: null
    }
    let val = id.split(':');
    data.room_num = val[0];
    data.room_num_occ = parseInt(val[1]);
    data.alphabet = String.fromCharCode(64 + data.room_num_occ);
    if (!data.room_num_occ) {
        data.room_num_occ = 1
        data.alphabet = ""
    }

    return data
}

export const allotRoom = (id) => {
    const { room_num, room_num_occ, alphabet } = roomNumberAndOccupancyResolve(id)
    console.log(roomNumberAndOccupancyResolve(id));

    return (dispatch, getState) => {
        const { uid, branch, year, gender, roll_number } = getState().user;
        const hostelAlloted = getState().branch[branch][year][gender]
        const rootRef = `hostels/${hostelAlloted}/${room_num}/${room_num_occ}`

        const roomInfo = {
            isAlloted: true,
            hostel: hostelAlloted,
            room_number: `${room_num}${alphabet}`,
        }


        database.ref(rootRef).once('value')
            .then(snapshot => {
                if (snapshot.val().occupied === true) {
                    return window.alert('Selected Room already Alloted to someone else!');
                }
                return database.ref(`hostels/${hostelAlloted}/${room_num}/${room_num_occ}`).update({
                    occupied: true,
                    by: roll_number
                })

            })
            .then(() => {
                return database.ref(`/users/${uid}`).update({ roomInfo })

            }).then(() => {
                dispatch({
                    type: ALLOT_ROOM,
                    payload: roomInfo
                })
            })
            .catch(e => {
                console.log(e);
            })
    }
}
