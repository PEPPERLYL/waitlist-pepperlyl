import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxY1-Bw3tgQsT1gzwRwJAn9WPTSziHFsw",
  authDomain: "waitlist-pepperlyl.firebaseapp.com",
  projectId: "waitlist-pepperlyl",
  storageBucket: "waitlist-pepperlyl.appspot.com",
  messagingSenderId: "1012158698652",
  appId: "1:1012158698652:web:30b8a5700d22b4f2db4959",
  measurementId: "G-MS99N6YJPG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
