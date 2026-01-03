import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMyGJAJBkBq0hvBruQNiYCww2BWH9RHoE",
  authDomain: "geotech-1a29e.firebaseapp.com",
  projectId: "geotech-1a29e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
