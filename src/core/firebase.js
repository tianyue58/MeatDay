import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI3rIpVnDPrZavQKpF_wXo_Gi0GXvv2Bs",
  authDomain: "meatday-23b81.firebaseapp.com",
  projectId: "meatday-23b81",
  storageBucket: "meatday-23b81.appspot.com",
  messagingSenderId: "538998594607",
  appId: "1:538998594607:web:9e5c1cc88a102768cc3ada",
  measurementId: "G-7NWVSK358C"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
