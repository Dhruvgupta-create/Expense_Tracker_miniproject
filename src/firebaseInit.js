// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD8Cu7_BTVeXLcXbnL5W63GjCa_lOf4NI",
  authDomain: "expense-tracker-18453.firebaseapp.com",
  projectId: "expense-tracker-18453",
  storageBucket: "expense-tracker-18453.appspot.com",
  messagingSenderId: "645140378585",
  appId: "1:645140378585:web:7107066e21299a7b7f9fc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
