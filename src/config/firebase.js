// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT-iSlVNdtLCENdPXF0CyNDPmenDMaQLo",
  authDomain: "estate-c1feb.firebaseapp.com",
  projectId: "estate-c1feb",
  storageBucket: "estate-c1feb.appspot.com",
  messagingSenderId: "879398708121",
  appId: "1:879398708121:web:32a766c49c7d7aec47a908",
  measurementId: "G-YK8NKBC7VP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Create a root reference
export const storage = getStorage();
export const db = getFirestore(app);
