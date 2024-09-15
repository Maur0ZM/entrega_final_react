import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles/index.css';
import { initializeApp } from "firebase/app";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const firebaseConfig = {
    apiKey: "AIzaSyB_ZrShnV5R4Z55kEppYirGAZAmL8M-kQ4",
    authDomain: "react-joyas-pam.firebaseapp.com",
    projectId: "react-joyas-pam",
    storageBucket: "react-joyas-pam.appspot.com",
    messagingSenderId: "928172581339",
    appId: "1:928172581339:web:5be07c0ce67b93b3a547fe"
  };

const app = initializeApp(firebaseConfig);

root.render(
    <App />
);
