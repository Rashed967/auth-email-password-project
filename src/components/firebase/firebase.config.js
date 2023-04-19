// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsmPoQcFJKhJXEy0snU9owOq0wgaEXjyo",
  authDomain: "auth-email-password-project2.firebaseapp.com",
  projectId: "auth-email-password-project2",
  storageBucket: "auth-email-password-project2.appspot.com",
  messagingSenderId: "831215257404",
  appId: "1:831215257404:web:35c5b25ee6cc2b9c810039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app