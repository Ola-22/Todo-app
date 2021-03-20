import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIRwEZAbIOQntoMFisKd5aRgPG1zGfb28",
  authDomain: "todo-app-61d40.firebaseapp.com",
  databaseURL: "https://todo-app-61d40-default-rtdb.firebaseio.com",
  projectId: "todo-app-61d40",
  storageBucket: "todo-app-61d40.appspot.com",
  messagingSenderId: "1095723264797",
  appId: "1:1095723264797:web:f9789b715bd7df5a79cff4",
  measurementId: "G-HY2V82HFB5",
});

const db = firebase.firestore();

export default db;
