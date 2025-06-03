// src/pages/firebaseconfig.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔁 Replace these with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyASlcNd6-wWupNhJ8f77yOV5XekJgiSNgo",
  authDomain: "healthapp-e0d73.firebaseapp.com",
  projectId: "healthapp-e0d73",
  storageBucket: "healthapp-e0d73.firebasestorage.app",
  messagingSenderId: "495554727292",
  appId: "1:495554727292:web:7ebe057e40c8793ccfa8f9",
  measurementId: "G-R3X4NP6WC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// ✅ Export these
export { auth, googleProvider };
