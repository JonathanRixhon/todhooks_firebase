import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyAt-L4N05MZ-3RS_TU15X0gpvfnF7R9npo',
	/* authDomain: 'crudino-79502.firebaseapp.com', */
	databaseURL: 'https://crudino-79502.firebaseio.com',
	/* projectId: 'crudino-79502',
	storageBucket: 'crudino-79502.appspot.com',
	messagingSenderId: '291768885651',
	appId: '1:291768885651:web:72ed809f18064358330866', */
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
