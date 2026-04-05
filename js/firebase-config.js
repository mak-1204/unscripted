// js/firebase-config.js
// ============================================================
// FIREBASE CONFIGURATION — replace with your actual project keys
// Firebase Console → Project Settings → Your Apps → SDK setup
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVmAkFza0XNQwhHx-G1choDAmU5-xSy5U",
  authDomain: "unscripted-e51fe.firebaseapp.com",
  projectId: "unscripted-e51fe",
  storageBucket: "unscripted-e51fe.firebasestorage.app",
  messagingSenderId: "91061667286",
  appId: "1:91061667286:web:027616b32497c7cff4d077",
  measurementId: "G-G92R9992PR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

let messaging = null;
try {
  messaging = getMessaging(app);
} catch (e) { /* Not supported outside service worker */ }

export { messaging, getToken, onMessage };
