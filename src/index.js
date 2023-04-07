import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HikesContextProvider } from "./context/HikeAppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HikesContextProvider>
      <App />
    </HikesContextProvider>
  </React.StrictMode>
);
