import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCspv28E679GKZmZZqkMIP5Sbm_4su5Zyw",
  authDomain: "linkedin-clone-895dc.firebaseapp.com",
  projectId: "linkedin-clone-895dc",
  storageBucket: "linkedin-clone-895dc.appspot.com",
  messagingSenderId: "762990369815",
  appId: "1:762990369815:web:6c32733e8fda34b0845052",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const postsRef = collection(db, "posts");
export { postsRef, db };
