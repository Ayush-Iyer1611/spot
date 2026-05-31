import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLgSrw4ZXjTGQF6REkhIL4rGVCyygM7YE",
  authDomain: "spot-175ec.firebaseapp.com",
  projectId: "spot-175ec",
  storageBucket: "spot-175ec.firebasestorage.app",
  messagingSenderId: "659480715362",
  appId: "1:659480715362:web:15cf48e2bd3051070db13b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;