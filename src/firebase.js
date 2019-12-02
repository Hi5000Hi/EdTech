import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDd7eC4Xl1PmNRLjdfvE0fy-Rl1q6hpYwU",
  authDomain: "edtech-c6501.firebaseapp.com",
  databaseURL: "https://edtech-c6501.firebaseio.com",
  projectId: "edtech-c6501",
  storageBucket: "edtech-c6501.appspot.com",
  messagingSenderId: "923465652977",
  appId: "1:923465652977:web:0d4e8928a4fc9d968fe750",
  measurementId: "G-L0MWQ87R4T"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
