//Firebase project connection
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: "journalie-96e3f.firebasestorage.app",
  messagingSenderId: "599371374632",
  appId: "1:599371374632:web:64a4fec359da4b3352951d",
};
// Run it and add services i will use: firestore , auth etc
const app = initializeApp();
