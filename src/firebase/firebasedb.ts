import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: "intro-dba76",
  storageBucket: "intro-dba76.appspot.com",
  messagingSenderId: "72620266934",
  appId: "1:72620266934:web:ca843568af22ab39191d17",
  measurementId: "G-TCRT3XSHQG",
};

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export default firebaseApp;
