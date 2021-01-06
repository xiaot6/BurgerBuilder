import firebase from 'firebase'
import "firebase/auth"
import "firebase/database"


var firebaseConfig = {
//   apiKey: "AIzaSyBvF7AZ4KnlVxXjlWivsMlS6WjcHBfTTu4",
//   authDomain: "all4cats-cs411.firebaseapp.com",
//   databaseURL: "https://all4cats-cs411.firebaseio.com",
//   projectId: "all4cats-cs411",
//   storageBucket: "all4cats-cs411.appspot.com",
//   messagingSenderId: "890772440877",
//   appId: "1:890772440877:web:8b9eab9693bf19d276b5a4",
//   measurementId: "G-6RBYNXCNB7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const fb = firebase.database();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};