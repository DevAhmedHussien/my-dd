// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfIT8nmrF3QiDoIaywI0OOr8zFLlwsUb0",
    authDomain: "telehealth-dc0ce.firebaseapp.com",
    projectId: "telehealth-dc0ce",
    storageBucket: "telehealth-dc0ce.appspot.com",
    messagingSenderId: "12961441230",
    appId: "1:12961441230:web:0a780e542db9006c41f79f",
    measurementId: "G-530Z0R6Q25"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };