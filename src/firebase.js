import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDCvV9OsrafeXYzqD6Safn_R-B41BKRTM8",
    authDomain: "connectus-fda59.firebaseapp.com",
    databaseURL: "https://connectus-fda59.firebaseio.com",
    projectId: "connectus-fda59",
    storageBucket: "connectus-fda59.appspot.com",
    messagingSenderId: "606126632990",
    appId: "1:606126632990:web:54078c078ed92c0a0cbe0f",
    measurementId: "G-YVTWETLL7Q"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();
export default database;
