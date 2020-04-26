
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
        history.push('/login')
        window.alert('You are registered successfully')
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
            gender: "F",
            course: "Senior Communications Agent",
            branch: "BARCH",
            year: "3",
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
                hostel: null,
                room_number: null
            }
        }
    }
}

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
                // console.log(snapshot);

            })
            .then(() => {
                dispatch({
                    type: ALLOT_ROOM,
                    payload: {
                        roomInfo: {
                            isAlloted: true,
                            hostel: hostelAlloted,
                            room_number: `${room_num}${alphabet}`,
                        }
                    }
                })
                // console.log('there');

            })
            .catch(e => {
                console.log(e);
            })
    }
}
