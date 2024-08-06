import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBZywvqZxFTvcNXiHAV3C5tnOxwQSIx-bA",
  authDomain: "netflix-project-1fa8f.firebaseapp.com",
  projectId: "netflix-project-1fa8f",
  storageBucket: "netflix-project-1fa8f.appspot.com",
  messagingSenderId: "165253476848",
  appId: "1:165253476848:web:57151ad46ebb97ebd56d35",
  measurementId: "G-7TY29YE5K8"
};


const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export { firebaseAuth };