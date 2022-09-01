import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEnUTr0bqB8XRoLRBqyc8mmz9UEFcvXM0",
  authDomain: "enliven-39828.firebaseapp.com",
  databaseURL: "https://enliven-39828-default-rtdb.firebaseio.com",
  projectId: "enliven-39828",
  storageBucket: "enliven-39828.appspot.com",
  messagingSenderId: "738443265301",
  appId: "1:738443265301:web:ee63f88c4065205282951c",
  measurementId: "G-V140TBL3EG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth(app);