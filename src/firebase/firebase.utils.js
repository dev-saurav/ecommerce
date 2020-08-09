import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWmJAaNOEeTUuwPJNelvku6UAshGrc05I",
    authDomain: "crwn-db-45f65.firebaseapp.com",
    databaseURL: "https://crwn-db-45f65.firebaseio.com",
    projectId: "crwn-db-45f65",
    storageBucket: "crwn-db-45f65.appspot.com",
    messagingSenderId: "308725922609",
    appId: "1:308725922609:web:f5eaf53dc169d341d50e10",
    measurementId: "G-8B0DR3ZYXG"
};

firebase.initializeApp(config);
