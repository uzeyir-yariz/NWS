import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";

import "./style/_main.css"
import "./style/HomeCard.css"
import "./style/Header.css"
import "./style/Footer.css"

createRoot(document.getElementById("root")).render(<App />);
