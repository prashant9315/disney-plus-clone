import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAETki9xEhlaxCG7mNkauSXJUQFmhTms68",
  authDomain: "disneyplus-9315.firebaseapp.com",
  projectId: "disneyplus-9315",
  storageBucket: "disneyplus-9315.appspot.com",
  messagingSenderId: "980213597321",
  appId: "1:980213597321:web:8d94fda5699416ddfab258",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
