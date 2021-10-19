// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app"; // Modular aproach

import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgJkuyLtHqNDdXgHZfLgrKdBwHUDicfBY",
  authDomain: "social-media-app-abe83.firebaseapp.com",
  projectId: "social-media-app-abe83",
  storageBucket: "social-media-app-abe83.appspot.com",
  messagingSenderId: "511520526419",
  appId: "1:511520526419:web:15d88f04647809e2d876a6"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp(); //Singelton patern
const db = getFirestore();
const storage = getStorage();

export {app,db,storage};