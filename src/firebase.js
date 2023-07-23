import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDD3Kgo1YcdqXW3zVULBj_2kVcTKSGwG0c",
  authDomain: "disneyplus-clone-90e52.firebaseapp.com",
  projectId: "disneyplus-clone-90e52",
  storageBucket: "disneyplus-clone-90e52.appspot.com",
  messagingSenderId: "1064008149410",
  appId: "1:1064008149410:web:346534370e3407061daafb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
