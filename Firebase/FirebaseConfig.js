import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3i5LausvQoT-FwPRTC-kcENzseGokinU",
  authDomain: "orebi-frontend-44934.firebaseapp.com",
  projectId: "orebi-frontend-44934",
  storageBucket: "orebi-frontend-44934.appspot.com",
  messagingSenderId: "1095587080830",
  appId: "1:1095587080830:web:e48544304f76601bc4062f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;