// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyA55My4-YKKEGUfYdj4WY1uLmMgTIiOoGg",
        authDomain: "prepwise-4af68.firebaseapp.com",
        projectId: "prepwise-4af68",
        storageBucket: "prepwise-4af68.firebasestorage.app",
        messagingSenderId: "860335080702",
        appId: "1:860335080702:web:297c675986c433344811af",
        measurementId: "G-HJXQCL1SZ1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);