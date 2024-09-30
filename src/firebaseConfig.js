// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGQtWaPihvDa1PfBcOE9-CALydFSaVrwk",
  authDomain: "fir-i-f161a.firebaseapp.com",
  projectId: "fir-i-f161a",
  storageBucket: "fir-i-f161a.appspot.com",
  messagingSenderId: "699687740839",
  appId: "1:699687740839:web:78ff9116be3d37de79c282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
