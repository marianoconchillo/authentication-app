import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDW47Wmth5j6Ftozwthp5Ub_pv0_nHwzi0",
    authDomain: "authenticationapp-ebbb3.firebaseapp.com",
    projectId: "authenticationapp-ebbb3",
    storageBucket: "authenticationapp-ebbb3.appspot.com",
    messagingSenderId: "24244631391",
    appId: "1:24244631391:web:2b69f088bdca260de6a8ea",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
