// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApzxvze19LIxZ0I97hife3XfHMekSqUcM",
  authDomain: "porfolio-21b16.firebaseapp.com",
  projectId: "porfolio-21b16",
  storageBucket: "porfolio-21b16.appspot.com",
  messagingSenderId: "567392368106",
  appId: "1:567392368106:web:838621d76a80f6c99b6e93",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);
export { firebase };
