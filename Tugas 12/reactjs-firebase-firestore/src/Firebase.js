import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyB7vhKtwqXEXlItQlEnpVqlVvoD1J_nGuE",
    authDomain: "reactfirestore-c9283.firebaseapp.com",
    databaseURL: "https://reactfirestore-c9283-default-rtdb.firebaseio.com",
    projectId: "reactfirestore-c9283",
    storageBucket: "reactfirestore-c9283.appspot.com",
    messagingSenderId: "734657070455",
    appId: "1:734657070455:web:80d17be7b955517b824d72",
    measurementId: "G-EK8NR3DSQG",
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
