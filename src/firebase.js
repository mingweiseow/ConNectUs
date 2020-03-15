import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: ""
};

firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();
export default database;
