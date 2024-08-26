import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMhXP9UXoe1Cq7yv4tIBy1-ZcLh0-XCGQ",
  authDomain: "jaimy-1.firebaseapp.com",
  projectId: "jaimy-1",
  storageBucket: "jaimy-1.appspot.com",
  messagingSenderId: "34935367387",
  appId: "1:34935367387:web:0260bce965f19ac1d00efe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const redirect = async () => {
  const mapDoc = await getDoc(doc(db, `metadata/redirects`));
  const map = (mapDoc.data()?.map || {}) as Record<string, string>;

  const path = window.location.pathname;

  if (map[path]) {
    window.location.href = map[path];
  } else {
    window.location.href = "https://jaimy.ai";
  }
};

redirect();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="redirectBox">
      <a href="https://jaimy.ai">Redirecting...</a>
    </div>
  </React.StrictMode>
);
