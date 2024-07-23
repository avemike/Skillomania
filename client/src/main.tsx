import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { client, createClient } from "@hey-api/client-fetch";

import "./i18n.ts";

createClient({
  baseUrl: import.meta.env.VITE_SERVER_BASE_URL,
});

client.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");

  if (token) {
    request.headers.set("Authorization", `Bearer ${token}`);
  }

  return request;
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
