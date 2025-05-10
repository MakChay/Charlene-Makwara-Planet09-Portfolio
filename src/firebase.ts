// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSq_G4rd79BtfJ4HApTCup-qSngyd3YlM",
  authDomain: "planet09portfolio.firebaseapp.com",
  projectId: "planet09portfolio",
  storageBucket: "planet09portfolio.firebasestorage.app",
  messagingSenderId: "77201069200",
  appId: "1:77201069200:web:463770425dd33bff31b415",
  measurementId: "G-5VHSJVR92F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app); // Export Firestore instance