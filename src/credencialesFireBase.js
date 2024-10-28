// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu7sAuiB-n0T6YVREqdqd_BVzREPAlpI8",
  authDomain: "e-comerce-4f110.firebaseapp.com",
  projectId: "e-comerce-4f110",
  storageBucket: "e-comerce-4f110.appspot.com",
  messagingSenderId: "637158355105",
  appId: "1:637158355105:web:528456bcf999a69319c0e0"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
export default appFireBase;