import { Route, Routes } from "react-router-dom";

// uzuvlar
import Nav from "./components/Nav";

// pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ExtraPage from "./pages/ExtraPage/ExtraPage";
import GameHome from "./pages/GamePage/GameHome";
import DeveloperHub from "./pages/DeveloperHubPage/DeveloperHub";
import Err404 from "./pages/Err404";

function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/extra" element={<ExtraPage />} />
        <Route path="/extra/hub" element={<DeveloperHub />} />
        <Route path="/extra/games" element={<GameHome />} />
        <Route path="/extra/projects" element={<ProjectPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </div>
  );
}

export default App;
