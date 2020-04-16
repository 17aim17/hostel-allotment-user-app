
import { REGISTER, LOGIN, LOGOUT, ALLOT_ROOM } from './types'

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
            payload: {
                uid: ref.key,
                ...data
            }
        })
    })
}

export const login = () => {
    return {
        type: LOGIN,
        payload: {
            uid: "-M1Bb6pLhmM8lzw5TpwO",
            full_name: "Isaac Shawn",
            email: "Virgil.Keeling86@yahoo.com",
            roll_number: "87326",
            gender: "M",
            course: "Senior Communications Agent",
            branch: "BARCH",
            year: "1",
            address: "655 Brakus Inlet Jalenberg West Virginia",
            primary_contact: "8765954901",
            father_name: "Clyde Jamal",
            mother_name: "Corbin Kevon",
            parent_contact: "8765954901",
            aadhaar_number: "876595490156",
            account_number: "34458143",
            password: "hello123",
            roomInfo: {
                isAlloted: false,
                room_number: null
            }
        }
    }
}

export const allotRoom = (id) => {
    let val = id.split(':');
    const room_num = val[0];
    const room_num_occ = val[1];
    console.log(id);
    return (dispatch, getState) => {
        const { branch, year, gender, roll_number } = getState().user;
        const hostelAlloted = getState().branch[branch][year][gender]
        const rootRef = `hostels/${hostelAlloted}/${room_num}/${room_num_occ}`


        database.ref(rootRef).once('value')
            .then(snapshot => {
                if (snapshot.val().occupied == true) {
                    return window.alert('Selected Room already Alloted to someone else!');
                }
                return database.ref(`hostels/${hostelAlloted}/${room_num}/${room_num_occ}`).update({
                    occupied: true
                })
            })
            .then(() => {
                dispatch({
                    type: ALLOT_ROOM,
                    payload: {
                        roomInfo: {
                            isAlloted: true,
                            hostel: hostelAlloted,
                            room_number: id,
                        }
                    }
                })
            })
            .catch(e => {
                console.log(e);
            })
    }
}
