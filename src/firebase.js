
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCs1L_FPqHSnMwDDjB2-e-chJEKSw4JqGo",
    authDomain: "whatsapp-clone-ace96.firebaseapp.com",
    projectId: "whatsapp-clone-ace96",
    storageBucket: "whatsapp-clone-ace96.appspot.com",
    messagingSenderId: "780539327403",
    appId: "1:780539327403:web:f38ca3342afff0705198ee",
    measurementId: "G-J4J2SS8KKC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;