import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9MDYiZ0xfz7-VeNs1ZvjWXtQj3iNve18",
  authDomain: "fir-react-c9a7a.firebaseapp.com",
  projectId: "fir-react-c9a7a",
  storageBucket: "fir-react-c9a7a.appspot.com",
  messagingSenderId: "47570066168",
  appId: "1:47570066168:web:89470457285c183292790d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const authentication = getAuth();
// const db = firebase.firestore();
// const storage = firebase.storage();

export { auth, authentication }