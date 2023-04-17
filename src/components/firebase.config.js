// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7EWKZrS3OO1MLNDgngd7e1G15Mzly5nQ",
  authDomain: "auth-email-password-project.firebaseapp.com",
  projectId: "auth-email-password-project",
  storageBucket: "auth-email-password-project.appspot.com",
  messagingSenderId: "292346150787",
  appId: "1:292346150787:web:eac64086ef0c37283c80b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app