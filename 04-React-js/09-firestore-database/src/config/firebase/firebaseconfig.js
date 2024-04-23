import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX4DJ-eNX7AssSUmHPEMy81FPW_QXiDZE",
  authDomain: "fir-fort.firebaseapp.com",
  projectId: "fir-fort",
  storageBucket: "fir-fort.appspot.com",
  messagingSenderId: "264958825280",
  appId: "1:264958825280:web:2426912304428aa5ea60a5",
  measurementId: "G-8HHLCLDYV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);