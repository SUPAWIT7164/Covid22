import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCFzMzuccxXFSSsLCWZpmoVvzCREusiL1Y",
    authDomain: "covid-27fbd.firebaseapp.com",
    projectId: "covid-27fbd",
    storageBucket: "covid-27fbd.appspot.com",
    messagingSenderId: "74870398852",
    appId: "1:74870398852:web:470623397f4dd8477847d1",
    measurementId: "G-768CBGE7Z8"
  });

const db = getFirestore(firebaseApp);
export default db