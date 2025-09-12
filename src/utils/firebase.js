// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjzMIre4EtpdnqXgUHdxn6jRb3D84iWJI",
  authDomain: "netflix-gpt-32dea.firebaseapp.com",
  projectId: "netflix-gpt-32dea",
  storageBucket: "netflix-gpt-32dea.firebasestorage.app",
  messagingSenderId: "538158522153",
  appId: "1:538158522153:web:6f7e2260504ed5da222138",
  measurementId: "G-2XWPF963P4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
