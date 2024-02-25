import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEyVgoY7691AOe67ZBloOw3CJIOrq65BY",
  authDomain: "fir-learning-fort.firebaseapp.com",
  projectId: "fir-learning-fort",
  storageBucket: "fir-learning-fort.appspot.com",
  messagingSenderId: "211298558496",
  appId: "1:211298558496:web:3e015cb76f59eb1989d245",
  measurementId: "G-WQ8FHWKK66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);