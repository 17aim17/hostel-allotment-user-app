import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDx7w33T_qV83stiWrrC-NDmX3qGGyZ7EM",
    authDomain: "hostel-user.firebaseapp.com",
    databaseURL: "https://hostel-user.firebaseio.com",
    projectId: "hostel-user",
    storageBucket: "hostel-user.appspot.com",
    messagingSenderId: "954594383970",
    appId: "1:954594383970:web:8ed977058da5151b82993b",
    measurementId: "G-XX9PY4FDDV"
}
firebase.initializeApp(firebaseConfig)

const database = firebase.database();

// database.ref('sessions').set({
//     current: {
//         session: "REGISTER"
//     },
//     next: {
//         session: "ALLOCATE"
//     },
//     previous: {
//         session: "NOTHING"
//     }
// })
export { firebase, database };
