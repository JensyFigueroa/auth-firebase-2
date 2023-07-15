// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyqJ8_xUAwtESP_cTKEYEDFxrfaiFe9qA",
  authDomain: "login-firebase-70736.firebaseapp.com",
  projectId: "login-firebase-70736",
  storageBucket: "login-firebase-70736.appspot.com",
  messagingSenderId: "478175484711",
  appId: "1:478175484711:web:549ae3acd385a41992e702"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)