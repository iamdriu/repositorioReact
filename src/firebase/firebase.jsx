import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey:"AIzaSyARsgs2G1eaVZ8srUMXIxA71P3aNmiyc_M",
  authDomain: "tech0l.firebaseapp.com",
  projectId: "tech0l",
  storageBucket: "tech0l.appspot.com",
  messagingSenderId: "434705751128",
  appId: "1:434705751128:web:b6652ef44ece280a837e2d"
};

const app = firebase.initializeApp(firebaseConfig)

//exporto acceso directo al servicio
export const firestore = firebase.firestore(app)