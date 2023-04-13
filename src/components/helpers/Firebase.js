import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { collection } from "firebase/firestore";
const firebaseConfig = process.env.FIREBASECONFIG;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const postsRef = collection(db, "posts");
export { postsRef, db };
