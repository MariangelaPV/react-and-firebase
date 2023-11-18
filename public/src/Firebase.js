// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoqv5dZD5uIGFfg_eQ0K8gqp6ZkTxXgqc",
  authDomain: "react-and-firebase-project.firebaseapp.com",
  projectId: "react-and-firebase-project",
  storageBucket: "react-and-firebase-project.appspot.com",
  messagingSenderId: "885829696912",
  appId: "1:885829696912:web:9cd864d663556ba8098715",
  measurementId: "G-RQGJ75ZL2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);