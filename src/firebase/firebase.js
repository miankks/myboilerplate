import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDUxtIhmtHQtguonAPb5lxTAEmceINqdlk",
    authDomain: "medicalphysicsworld-d79d3.firebaseapp.com",
    databaseURL: "https://medicalphysicsworld-d79d3-default-rtdb.firebaseio.com",
    projectId: "medicalphysicsworld-d79d3",
    storageBucket: "medicalphysicsworld-d79d3.appspot.com",
    messagingSenderId: "253864619648",
    appId: "1:253864619648:web:cdf40da2e5fb28adc14065",
    measurementId: "G-JH148VDTZE"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider ,database as default };
