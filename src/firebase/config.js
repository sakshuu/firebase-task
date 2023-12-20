import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAOTwp7gJL9Yf-GBBVjG5bzeTTXWwrbZbQ",
  authDomain: "auth-483e4.firebaseapp.com",
  projectId: "auth-483e4",
  storageBucket: "auth-483e4.appspot.com",
  messagingSenderId: "780681246584",
  appId: "1:780681246584:web:1a7f035ecb4ae7c2dd3a8d"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)