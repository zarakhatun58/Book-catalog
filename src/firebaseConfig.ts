import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";
//import firebase from "firebase/app";
// import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyD8fjRoWA3lOA2lxHnYVTYMm9_EseUC9JM",
  authDomain: "book-catalog-e19fe.firebaseapp.com",
  projectId: "book-catalog-e19fe",
  storageBucket: "book-catalog-e19fe.appspot.com",
  messagingSenderId: "477767245968",
  appId: "1:477767245968:web:4b9c2eafcf159fad193815",
  measurementId: "G-9RLQNVX2MK",
};

firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
// export const auth = firebase.auth();

//export default firebase;
const auth = firebase.auth();
// Other Firebase service instances
const firestore = firebase.firestore();

export { auth, firestore };
