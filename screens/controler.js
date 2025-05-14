// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9_dDAwAozmTXsbNoCLYOC267fRn-wnUY",
  authDomain: "aulasm025.firebaseapp.com",
  projectId: "aulasm025",
  storageBucket: "aulasm025.firebasestorage.app",
  messagingSenderId: "193860459681",
  appId: "1:193860459681:web:53d2a2d0c76cd2ac7ca4e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);