// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBriNJE93GDOT_0GwikkmHlIme9s7YX_Q0",
  authDomain: "auth-context-firebase-login.firebaseapp.com",
  projectId: "auth-context-firebase-login",
  storageBucket: "auth-context-firebase-login.appspot.com",
  messagingSenderId: "390970677356",
  appId: "1:390970677356:web:28fd1fbdf7d67c0aed6049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app