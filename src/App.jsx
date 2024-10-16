import { Route, Routes } from "react-router-dom";

// uzuvlar
import Nav from "./components/Nav";

// pages
import Home from "./pages/Home";
import SecondPage from "./pages/DeveloperHubPage/DeveloperHub";
import Err404 from "./pages/Err404";
import GamePage from "./pages/GamePage/GamePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";


function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hub" element={<SecondPage/>}/>
        <Route path="/game" element={<GamePage/> }/>
        <Route path="/contact" element={<ContactPage/> }/>
        <Route path="/about" element={<AboutPage/> }/>
        <Route path="/projects" element={<ProjectPage/> }/>
        <Route path="*" element={<Err404/> }/>
      </Routes>
    </div>
  );
}

export default App;
