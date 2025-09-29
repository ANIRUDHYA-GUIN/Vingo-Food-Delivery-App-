// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vigno-food-delivery.firebaseapp.com",
  projectId: "vigno-food-delivery",
  storageBucket: "vigno-food-delivery.firebasestorage.app",
  messagingSenderId: "188327626530",
  appId: "1:188327626530:web:6bffebeb65a1e74b71c77b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {provider,auth}
