import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ipuMiHIcxMLV_qggLoyjteItGq6ej9I",
  authDomain: "coder-reactjs-pcworld.firebaseapp.com",
  projectId: "coder-reactjs-pcworld",
  storageBucket: "coder-reactjs-pcworld.appspot.com",
  messagingSenderId: "363738146442",
  appId: "1:363738146442:web:32aa27182e78dcc0e9ef73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
