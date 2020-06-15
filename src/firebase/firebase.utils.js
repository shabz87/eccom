import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBBWZd2u8noXPioMKIMhFt9EmktbZn4ZHE",
    authDomain: "crwn-68657.firebaseapp.com",
    databaseURL: "https://crwn-68657.firebaseio.com",
    projectId: "crwn-68657",
    storageBucket: "crwn-68657.appspot.com",
    messagingSenderId: "578826819027",
    appId: "1:578826819027:web:865d03760e20aa39a90b26",
    measurementId: "G-X6LD0B5XWY"
}
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;