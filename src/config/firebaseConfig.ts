// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCFx_1XhYbI80P0l_FxpX3Dt7Rz5YW9ZcY",
//   authDomain: "cv-front-end.firebaseapp.com",
//   projectId: "cv-front-end",
//   storageBucket: "cv-front-end.appspot.com",
//   messagingSenderId: "923882584538",
//   appId: "1:923882584538:web:79964c2f0afe81e2b068e3"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCFx_1XhYbI80P0l_FxpX3Dt7Rz5YW9ZcY",
//   authDomain: "cv-front-end.firebaseapp.com",
//   projectId: "cv-front-end",
//   storageBucket: "cv-front-end.appspot.com",
//   messagingSenderId: "923882584538",
//   appId: "1:923882584538:web:79964c2f0afe81e2b068e3"
// };

const firebaseConfig = {
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

