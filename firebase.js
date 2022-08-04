// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
const { getFirestore, Timestamp, FieldValue } = require('firebase/compat/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT1HZzB7dyCoaGmRbuU8JYCAasXyiaTts",
  authDomain: "ftu-barber.firebaseapp.com",
  projectId: "ftu-barber",
  storageBucket: "ftu-barber.appspot.com",
  messagingSenderId: "219629768055",
  appId: "1:219629768055:web:1797c4269e3c2136342572",
  measurementId: "G-YZTMJNYJ6B"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
    
}else{
    app = firebase.app()
    
}

const auth = firebase.auth();
const db = firebase.firestore();

// const analytics = getAnalytics(app);

export { auth, db };