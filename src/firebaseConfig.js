import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0GfBFQ9ydHrlYCownpee0gSz69LeQANc",
  authDomain: "the-wall-c29ab.firebaseapp.com",
  projectId: "the-wall-c29ab",
  storageBucket: "the-wall-c29ab.appspot.com",
  messagingSenderId: "688120458469",
  appId: "1:688120458469:web:89faf70c7b26bb2f35b80c",
  measurementId: "G-YX48X86WSJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
