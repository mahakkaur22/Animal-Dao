// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARE9GsUQbW7REnaMKPSZzOikK0W4MSttw",
  authDomain: "animalcaredao.firebaseapp.com",
  databaseURL: "https://animalcaredao-default-rtdb.firebaseio.com",
  projectId: "animalcaredao",
  storageBucket: "animalcaredao.appspot.com",
  messagingSenderId: "529592921583",
  appId: "1:529592921583:web:72211ae7553fc02d569a1a",
  measurementId: "G-E0VE5Y1LWJ",
};
// console.log(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig),
  db = getDatabase(app);

// const analytics = getAnalytics(app);
