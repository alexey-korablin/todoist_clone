import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCiLnUWFlDB0sscu5HtRLwjAkynu9Oe8Hk",
    authDomain: "todoist-clone-kora.firebaseapp.com",
    databaseURL: "https://todoist-clone-kora.firebaseio.com",
    projectId: "todoist-clone-kora",
    storageBucket: "todoist-clone-kora.appspot.com",
    messagingSenderId: "959389446648",
    appId: "1:959389446648:web:547e9db45ebd55752c660d"
});

export { firebaseConfig as firebase };

/*
name Music userId t5MyE8PUN2
*/