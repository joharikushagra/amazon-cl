import firebase from 'firebase';

const firebaseApp = {
    apiKey: "AIzaSyDUFhNFgJ2m_-zx-X1g6VYprF_isc9CHuE",
    authDomain: "clone-4889a.firebaseapp.com",
    databaseURL: "https://clone-4889a.firebaseio.com",
    projectId: "clone-4889a",
    storageBucket: "clone-4889a.appspot.com",
    messagingSenderId: "471051293738",
    appId: "1:471051293738:web:cd7f1eb4d66cc6e2f39f53"
}

firebase.initializeApp(firebaseApp);

// const db = firebase.firestore();
const auth = firebase.auth();

export {auth};