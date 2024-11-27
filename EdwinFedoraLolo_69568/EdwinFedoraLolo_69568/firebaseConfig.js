import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8smnOc3GEi9zu5FopFsICMeVUwnk8wMc",
  authDomain: "edwinfedoralolouts.firebaseapp.com",
  projectId: "edwinfedoralolouts",
  storageBucket: "edwinfedoralolouts.appspot.com",
  messagingSenderId: "742493209788",
  appId: "1:742493209788:web:e8e76b4f26bf20d83a3cb9",
  measurementId: "G-4PH087HKTR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
