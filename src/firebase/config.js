import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "streamline-7e36a.firebaseapp.com",
  projectId: "streamline-7e36a",
  storageBucket: "streamline-7e36a.appspot.com",
  messagingSenderId: "933518900990",
  appId: "1:933518900990:web:17720bceec981d44f2efaf",
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
