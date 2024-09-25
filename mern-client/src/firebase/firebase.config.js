// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOPtYGuU20TDYxSVBVPYFKfdoZiiEoqIs",
    authDomain: "mern-book-inventory-56cdf.firebaseapp.com",
    projectId: "mern-book-inventory-56cdf",
    storageBucket: "mern-book-inventory-56cdf.appspot.com",
    messagingSenderId: "627091418908",
    appId: "1:627091418908:web:300d87e8d77206a99614d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
