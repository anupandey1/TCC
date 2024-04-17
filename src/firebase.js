// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//   apiKey: "AIzaSyASHLj1VCl-Q1Nl8H-HYg5s8tx3SZyTYeI",
//   authDomain: "t-haul.firebaseapp.com",
//   projectId: "t-haul",
//   storageBucket: "t-haul.appspot.com",
//   messagingSenderId: "450036246610",
//   appId: "1:450036246610:web:0131cfcabe21028f2d178b",
//   measurementId: "G-4EPZ0WVG55"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app)

// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5XU1AFkVdS58nPq5Taqaw-tnIHwc4YFI",
  authDomain: "tcc-support-a146d.firebaseapp.com",
  databaseURL: "https://tcc-support-a146d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tcc-support-a146d",
  storageBucket: "tcc-support-a146d.appspot.com",
  messagingSenderId: "250536188370",
  appId: "1:250536188370:web:6a1d1eeff3d514b574500b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);