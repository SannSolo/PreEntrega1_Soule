import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnw3VPYkooYoPmVKMXLryhLZFotYIeAnU",
  authDomain: "react-app-db4b6.firebaseapp.com",
  projectId: "react-app-db4b6",
  storageBucket: "react-app-db4b6.appspot.com",
  messagingSenderId: "702062758752",
  appId: "1:702062758752:web:fed552013749a3bf7eac05"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
