
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
            isError: "true",
            roomInfo: {
                isAlloted: false,
                room_number: null
            }
        }
    }
}