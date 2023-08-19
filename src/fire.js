// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJqs0JSkj_B8AbR_znJi9PbcWsOnld1To",
  authDomain: "btc-db-2f4ec.firebaseapp.com",
  projectId: "btc-db-2f4ec",
  storageBucket: "btc-db-2f4ec.appspot.com",
  messagingSenderId: "671480422007",
  appId: "1:671480422007:web:4be637b862f42dedc83072",
  measurementId: "G-HJHG8JBPYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export default {analytics,db}