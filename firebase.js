import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Paste your Firebase web config values here from Firebase Console > Project settings.
const firebaseConfig = {
  apiKey: "PASTE_FIREBASE_WEB_API_KEY",
  authDomain: "score-x-6d060.firebaseapp.com",
  projectId: "score-x-6d060",
  storageBucket: "score-x-6d060.firebasestorage.app",
  messagingSenderId: "152297786245",
  appId: "PASTE_FIREBASE_WEB_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
