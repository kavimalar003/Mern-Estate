// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c9d8e.firebaseapp.com",
  projectId: "mern-estate-c9d8e",
  storageBucket: "mern-estate-c9d8e.appspot.com",
  messagingSenderId: "51764705787",
  appId: "1:51764705787:web:15e3a277a0a473b56bb35e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);