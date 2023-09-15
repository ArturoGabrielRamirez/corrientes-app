
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: process.env.apiKey as string,
    authDomain: process.env.apiKey as string,
    projectId: process.env.projectId as string,
    storageBucket: process.env.storageBucket as string,
    messagingSenderId: process.env.messagingSenderId as string,
    appId: process.env.appId as string,
    measurementId: process.env.measurementId as string,
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
/* const analytics = getAnalytics(app); */