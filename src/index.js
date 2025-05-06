import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GitHubProjectsProvider } from "./context/GitHubProjectsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GitHubProjectsProvider>
      <App />
    </GitHubProjectsProvider>
  </React.StrictMode>
);
