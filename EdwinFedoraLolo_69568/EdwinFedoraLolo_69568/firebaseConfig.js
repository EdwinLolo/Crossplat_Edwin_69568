import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7W12MBd88XeGaZClrRyVyPzLLW2awhiE",
  authDomain: "runningappmap-e6423.firebaseapp.com",
  projectId: "runningappmap-e6423",
  storageBucket: "runningappmap-e6423.appspot.com",
  messagingSenderId: "668079487094",
  appId: "1:668079487094:web:03dc4e22a590799beb8757",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
