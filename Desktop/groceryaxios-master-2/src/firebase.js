import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyD30e1CgsAZTSKIOI_yovNlAifq-M4VC_w",
    authDomain: "axios-chart.firebaseapp.com",
    databaseURL: "https://axios-chart.firebaseio.com",
    projectId: "axios-chart"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
