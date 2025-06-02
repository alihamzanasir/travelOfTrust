import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClAXsgghdU4ZfyyVSzKljJOshVnZE1qNM",
  authDomain: "traveloftrust.firebaseapp.com",
  projectId: "traveloftrust",
  storageBucket: "traveloftrust.firebasestorage.app",
  messagingSenderId: "857721066691",
  appId: "1:857721066691:web:abc43430ac7442cfd0fe76"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);