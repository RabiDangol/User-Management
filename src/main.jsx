import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ThemeInit } from "../.flowbite-react/init";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeInit />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
