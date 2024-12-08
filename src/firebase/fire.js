import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //add your firebase configuration
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
