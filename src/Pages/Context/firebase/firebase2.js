import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDqW09W9_uf5s7dUs9guuAmfM889Z7YagU",
    authDomain: "querypart.firebaseapp.com",
    projectId: "querypart",
    storageBucket: "querypart.appspot.com",
    messagingSenderId: "75813891882",
    appId: "1:75813891882:web:1c8b11ea37d872eb38b853"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase;
