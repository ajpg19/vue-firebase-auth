import { createApp } from 'vue'
import App from './App.vue'





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBv70cDAsh2QiXjMFUsMGnRJoNLIxYnt-8",
    authDomain: "vue-firebase-auth-8e0d0.firebaseapp.com",
    projectId: "vue-firebase-auth-8e0d0",
    storageBucket: "vue-firebase-auth-8e0d0.appspot.com",
    messagingSenderId: "577922579852",
    appId: "1:577922579852:web:b848a96ea208dbd097aaa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






createApp(App).mount('#app')
