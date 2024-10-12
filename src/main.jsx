import { createRoot } from "react-dom/client";
import { Analytics } from '@vercel/analytics/react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./style/_Main.css"
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Analytics/>
  </BrowserRouter>
);
