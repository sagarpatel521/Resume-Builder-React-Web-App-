// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCya1CGTfFpIFr8t9lgm1_o0VEPg8VjOo0",
  authDomain: "resume-builder-2b1a3.firebaseapp.com",
  projectId: "resume-builder-2b1a3",
  storageBucket: "resume-builder-2b1a3.appspot.com",
  messagingSenderId: "162219594005",
  appId: "1:162219594005:web:ce67a566d449fda7f1591c",
  measurementId: "G-GVS39932MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default app;