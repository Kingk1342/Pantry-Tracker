// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGMcbBK8zWqSSBOlpTNg0jUCC2UjFoz98",
  authDomain: "inventoapp-46fe7.firebaseapp.com",
  projectId: "inventoapp-46fe7",
  storageBucket: "inventoapp-46fe7.appspot.com",
  messagingSenderId: "385536517980",
  appId: "1:385536517980:web:3ab20ae1d34e6339574399",
  measurementId: "G-MQC6SLSCNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }
