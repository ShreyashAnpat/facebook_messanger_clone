import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYmN2konq3c8cqgSFlaMCKcpdGZsPsa-k",
    authDomain: "facebook-messenger-clone-b1763.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-b1763.firebaseio.com",
    projectId: "facebook-messenger-clone-b1763",
    storageBucket: "facebook-messenger-clone-b1763.appspot.com",
    messagingSenderId: "642400251643",
    appId: "1:642400251643:web:6d3c7413249740b0c94a5e",
    measurementId: "G-RLDTL6H03E"
});
const db = firebase.firestore();
export default db;