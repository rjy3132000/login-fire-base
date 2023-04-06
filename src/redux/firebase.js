import firebase from "firebase/compat/app";
import "firebase/compat/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDGhQ-umq-As-rJP4JC6_EmOHiPnRsdnhY",
  authDomain: "react-firebase-auth-924d7.firebaseapp.com",
  projectId: "react-firebase-auth-924d7",
  storageBucket: "react-firebase-auth-924d7.appspot.com",
  messagingSenderId: "258472256092",
  appId: "1:258472256092:web:43a8944300fd3c93957c99",
};

firebase.initializeApp(firebaseConfig);

let auth = firebase.auth();
let googleAuthProvider = new firebase.auth.GoogleAuthProvider();
let facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider }