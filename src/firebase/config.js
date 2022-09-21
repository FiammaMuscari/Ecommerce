// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyCiXVRlAJe2Tf7aRVdf2JLDIVfGq9AUQVg",

    authDomain: "ecommerce-6c2ac.firebaseapp.com",
  
    projectId: "ecommerce-6c2ac",
  
    storageBucket: "ecommerce-6c2ac.appspot.com",
  
    messagingSenderId: "873219434891",
  
    appId: "1:873219434891:web:c786f8366ae21cac6a678e",
  
  

//   measurementId: "G-CNYRFLTKR3"

};


// Initialize Firebase

const FirebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)