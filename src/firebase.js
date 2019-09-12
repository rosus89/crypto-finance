import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBdvReZeSFnPtFaYQOeL7NE6K4upZa8bQQ",
    authDomain: "cryptofinance-ee282.firebaseapp.com",
    databaseURL: "https://cryptofinance-ee282.firebaseio.com",
    projectId: "cryptofinance-ee282",
    storageBucket: "cryptofinance-ee282.appspot.com",
    messagingSenderId: "656645244646",
    appId: "1:656645244646:web:9ba651d5296422446bdd27"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fb = firebase.firestore();
export const db = firebase.database();
export const auth = firebase.auth();
