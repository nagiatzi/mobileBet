import firebase from 'firebase';

    const config = {
      apiKey: "AIzaSyA6v7sM5h5S9pXQAs3VCYF33X1lgWuuSIc",
      authDomain: "reactbet.firebaseapp.com",
      databaseURL: "https://reactbet.firebaseio.com",
      projectId: "reactbet",
      storageBucket: "",
      messagingSenderId: "901933484552"
    };

    firebase.initializeApp(config);

    export default firebase;

    export const database = firebase.database();
