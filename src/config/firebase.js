import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA_R6U0g4Zf6mTKZhEnJINnnkMa0X_pXNs",
    authDomain: "hot-red-onions.firebaseapp.com",
    projectId: "hot-red-onions",
    storageBucket: "hot-red-onions.appspot.com",
    messagingSenderId: "728769131485",
    appId: "1:728769131485:web:c9bbd6e79ad19c5e52bc34"
  };

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;