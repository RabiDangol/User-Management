import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ThemeInit } from "../.flowbite-react/init";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeInit />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
