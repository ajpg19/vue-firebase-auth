import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBv70cDAsh2QiXjMFUsMGnRJoNLIxYnt-8",
    authDomain: "vue-firebase-auth-8e0d0.firebaseapp.com",
    projectId: "vue-firebase-auth-8e0d0",
    storageBucket: "vue-firebase-auth-8e0d0.appspot.com",
    messagingSenderId: "577922579852",
    appId: "1:577922579852:web:b848a96ea208dbd097aaa9"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db
}