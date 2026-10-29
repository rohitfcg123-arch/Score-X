import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Paste your Firebase web config values here from Firebase Console > Project settings.
const firebaseConfig = {
  apiKey: "AIzaSyCtO7YfIJxy3B80ph8y_lPNGVLl0LBX8YU",
  authDomain: "score-x-6d060.firebaseapp.com",
  projectId: "score-x-6d060",
  storageBucket: "score-x-6d060.firebasestorage.app",
  messagingSenderId: "152297786245",
  appId: "1:152297786245:web:2e606876d48908ca6592ec"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
