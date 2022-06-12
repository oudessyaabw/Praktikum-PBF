import firebase from 'firebase/compat/app';
// import "firebase/auth";
// import "firebase/firestore";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDu86Kprje_TJejjfBmDL7-Npf0UShmKHs",
    authDomain: "week10-react-firebase.firebaseapp.com",
    projectId: "week10-react-firebase",
    storageBucket: "week10-react-firebase.appspot.com",
    messagingSenderId: "264093320199",
    appId: "1:264093320199:web:8382f33b898296849f16a2",
    measurementId: "G-SYHNG3HSM4"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;