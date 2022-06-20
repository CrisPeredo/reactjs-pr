// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEOVwbbF4vXF4vSfcLDLgt-nBzfIxQ6Go",
  authDomain: "pr-react-js.firebaseapp.com",
  projectId: "pr-react-js",
  storageBucket: "pr-react-js.appspot.com",
  messagingSenderId: "950965820161",
  appId: "1:950965820161:web:3b364ccb002e89f6d21900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)