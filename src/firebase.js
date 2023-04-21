import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsdrAiqdSgD1o1ezoEb-ou4OtkkvN-Vv4",
    authDomain: "netflix-clone-968a7.firebaseapp.com",
    projectId: "netflix-clone-968a7",
    storageBucket: "netflix-clone-968a7.appspot.com",
    messagingSenderId: "133896030869",
    appId: "1:133896030869:web:e22e679dadc01bbe9f699c"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };