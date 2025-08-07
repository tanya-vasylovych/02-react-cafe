// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
// import CafeInfo from "./components/CafeInfo/CafeInfo";
// import Notification from "./components/Notification/Notification";
// import VoteOptions from "./components/VoteOptions/VoteOptions";
// import VoteStats from "./components/VoteStats/VoteStats";



// Нормалізація стилів
import "modern-normalize";
// Глобальні стилі (додатково)
import "./global.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <CafeInfo/>
    <Notification/>
    <VoteOptions/>
    <VoteStats/> */}
  </React.StrictMode>
);

