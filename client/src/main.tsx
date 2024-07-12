import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createClient } from "@hey-api/client-fetch";

createClient({
  baseUrl: import.meta.env.VITE_SERVER_BASE_URL,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
