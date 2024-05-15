/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDEcczeaK_ZhQCWR_H6gPUxVDj0Mn1YxH0",
  authDomain: "htms-mini.firebaseapp.com",
  projectId: "htms-mini",
  storageBucket: "htms-mini.appspot.com",
  messagingSenderId: "520232918061",
  appId: "1:520232918061:web:d017c9495ecd6acafe6ca4",
  measurementId: "G-RWK20X4JQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default database;*/



/*import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEcczeaK_ZhQCWR_H6gPUxVDj0Mn1YxH0",
  authDomain: "htms-mini.firebaseapp.com",
  projectId: "htms-mini",
  storageBucket: "htms-mini.appspot.com",
  messagingSenderId: "520232918061",
  appId: "1:520232918061:web:d017c9495ecd6acafe6ca4",
  measurementId: "G-RWK20X4JQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };*/

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import{getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEcczeaK_ZhQCWR_H6gPUxVDj0Mn1YxH0",
  authDomain: "htms-mini.firebaseapp.com",
  projectId: "htms-mini",
  storageBucket: "htms-mini.appspot.com",
  messagingSenderId: "520232918061",
  appId: "1:520232918061:web:d017c9495ecd6acafe6ca4",
  measurementId: "G-RWK20X4JQ7"
};


//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app);
export {auth, db };

