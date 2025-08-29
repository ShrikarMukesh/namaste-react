// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhoxD3kKOL8HzdrDq9Q0CKJZEbRXpMTF8",
    authDomain: "namaste-react-7d758.firebaseapp.com",
    projectId: "namaste-react-7d758",
    storageBucket: "namaste-react-7d758.firebasestorage.app",
    messagingSenderId: "901570277996",
    appId: "1:901570277996:web:5d02a0aa2cc29e9b4c9e49",
    measurementId: "G-HDWCMS3CBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);