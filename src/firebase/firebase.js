import * as firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyDx7w33T_qV83stiWrrC-NDmX3qGGyZ7EM",
//     authDomain: "hostel-user.firebaseapp.com",
//     databaseURL: "https://hostel-user.firebaseio.com",
//     projectId: "hostel-user",
//     storageBucket: "hostel-user.appspot.com",
//     messagingSenderId: "954594383970",
//     appId: "1:954594383970:web:8ed977058da5151b82993b",
//     measurementId: "G-XX9PY4FDDV"
// }
const firebaseConfig = {
    apiKey: "AIzaSyBpg2InuI8EiZhI6tgU0ZLR38WVIMtVwic",
    authDomain: "micro-avenue-237301.firebaseapp.com",
    databaseURL: "https://micro-avenue-237301.firebaseio.com",
    projectId: "micro-avenue-237301",
    storageBucket: "micro-avenue-237301.appspot.com",
    messagingSenderId: "670302176078",
    appId: "1:670302176078:web:dffbc02d069c7ac1a6141f",
    measurementId: "G-WNSGJ143ES"
};
firebase.initializeApp(firebaseConfig)

const database = firebase.database();

const auth = firebase.auth();

// database.ref('admins').push({
//     email: "17aim17@gmail.com",
//     name: "Ashish Kumar"
// })


export { firebase, database, auth };
