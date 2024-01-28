import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);