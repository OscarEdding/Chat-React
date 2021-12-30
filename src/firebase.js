import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWYuaKzSg9dAeJ130BnCoq71lrQGBmctw",
  authDomain: "chat-66b12.firebaseapp.com",
  projectId: "chat-66b12",
  storageBucket: "chat-66b12.appspot.com",
  messagingSenderId: "850604473514",
  appId: "1:850604473514:web:1c1f99bb7e75288c32a4d3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider } 