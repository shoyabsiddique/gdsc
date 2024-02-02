// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNJFANlESY8qFYk2nvLtl1UmBSMBoXshg",
  authDomain: "gdsc-35c38.firebaseapp.com",
  projectId: "gdsc-35c38",
  storageBucket: "gdsc-35c38.appspot.com",
  messagingSenderId: "478929438849",
  appId: "1:478929438849:web:6973d0e303ef2e639c2580",
  measurementId: "G-J6TP3QTSRF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app.name);
// const analytics = getAnalytics(app);
