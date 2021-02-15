import firebase from 'firebase';
require('firebase/auth');

var firebaseConfig = {
    apiKey: "AIzaSyCt1B9BwCbpQ8abA1qcbk61xQuY0M3QLRs",
    authDomain: "note-taking-app-3c5ec.firebaseapp.com",
    projectId: "note-taking-app-3c5ec",
    storageBucket: "note-taking-app-3c5ec.appspot.com",
    messagingSenderId: "447372576112",
    appId: "1:447372576112:web:b76cfc1373130186bd3bb5",
    measurementId: "G-5Q656EPJRE"
  };

const fire=firebase.initializeApp(firebaseConfig);

export default fire;