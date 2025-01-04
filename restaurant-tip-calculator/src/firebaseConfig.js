import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEIHXjFg__fSWiw1Cn_bA3BCq58iBSJ4s",
  authDomain: "restaurant-tip-calculator-r.firebaseapp.com",
  projectId: "restaurant-tip-calculator-r",
  storageBucket: "restaurant-tip-calculator-r.firebasestorage.app",
  messagingSenderId: "790224365157",
  appId: "1:790224365157:web:14d42201a11ccf2a61888c",
  measurementId: "G-HD3TWMFR6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase Initialized", app);
export const auth = getAuth(app);
export const db = getFirestore(app);