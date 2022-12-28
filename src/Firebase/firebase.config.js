// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlmqZ0cVZ4OiFpP-oNuAlg4ZTA3aYFZ0Y",
  authDomain: "todo-app-7953d.firebaseapp.com",
  projectId: "todo-app-7953d",
  storageBucket: "todo-app-7953d.appspot.com",
  messagingSenderId: "240970401420",
  appId: "1:240970401420:web:4194092de5cc77af02dda9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;