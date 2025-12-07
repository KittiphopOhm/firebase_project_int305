// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJRYepUyF9NW0ZGx4eOGkJKOxchhE_ZH4",
  authDomain: "int305fb-ca910.firebaseapp.com",
  projectId: "int305fb-ca910",
  storageBucket: "int305fb-ca910.firebasestorage.app",
  messagingSenderId: "747602013087",
  appId: "1:747602013087:web:783f3d1ac5db407e666baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db