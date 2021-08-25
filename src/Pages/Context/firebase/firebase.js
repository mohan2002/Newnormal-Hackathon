import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {

    apiKey: "AIzaSyD879OBVHgsr61t2JyVEHOYShYsDxPJn3w",

    authDomain: "eventhub-44f1b.firebaseapp.com",

    projectId: "eventhub-44f1b",

    storageBucket: "eventhub-44f1b.appspot.com",

    messagingSenderId: "136984819570",

    appId: "1:136984819570:web:9c0307c3a7cf63242d4feb"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase;