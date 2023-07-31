import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "streamline-7e36a.firebaseapp.com",
  projectId: "streamline-7e36a",
  storageBucket: "streamline-7e36a.appspot.com",
  messagingSenderId: "ID",
  appId: "ID",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
