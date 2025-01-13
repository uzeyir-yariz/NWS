import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";

import "./style/_main.css"
import "./style/HomeCard.css"
import "./style/Header.css"
import "./style/Footer.css"
import "./style/DeadLine.css"
import "./style/MainContent.css"
import "./style/ProjectCard.css"

createRoot(document.getElementById("root")).render(<App />);
