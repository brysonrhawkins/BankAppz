import firebase from 'firebase/compat/app';
import {getAuth, } from 'firebase/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {   
  apiKey: "AIzaSyB0lKZgwXl3zb9zPu4QBRgtNsJVBN4wSas",
  authDomain: "advancedbank-277f2.firebaseapp.com",
  projectId: "advancedbank-277f2",
  storageBucket: "advancedbank-277f2.appspot.com",
  messagingSenderId: "1035811789412",
  appId: "1:1035811789412:web:613aed949446ebd285dd71",
  measurementId: "G-BCFDBHW058"
 };


 const app = firebase.initializeApp(firebaseConfig);
 const db = app.firestore();

 export const auth = getAuth(app);
 export default db;