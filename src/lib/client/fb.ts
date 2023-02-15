import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { browser } from "$app/environment";

export const firebaseConfig = {
  apiKey: "AIzaSyDJW_T_5RYc2rpQoRYe2Yoc6iUKV3Bcfp8",
  authDomain: "freedcamp-4a243.firebaseapp.com",
  projectId: "freedcamp-4a243",
  storageBucket: "freedcamp-4a243.appspot.com",
  messagingSenderId: "868268833017",
  appId: "1:868268833017:web:144bf51d3b1cf792220a28",
  measurementId: "G-55G374X6YQ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app) 
export const analytics = () => {
  if (browser)
    return getAnalytics(app)
};