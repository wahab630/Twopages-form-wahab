// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs51Xr9UjYrhwuslr6eTSCk-YonvEGwW4",
  authDomain: "fir-twopages-auth.firebaseapp.com",
  projectId: "fir-twopages-auth",
  storageBucket: "fir-twopages-auth.appspot.com",
  messagingSenderId: "921025653475",
  appId: "1:921025653475:web:284e9784e9f5b4062df3d6"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);