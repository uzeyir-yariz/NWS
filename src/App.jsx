import { Route, Routes } from "react-router-dom";

// uzuvlar
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import SecondPage from "./pages/DeveloperHubPage/DeveloperHub";
import Err404 from "./pages/Err404";
import GamePage from "./pages/GamePage/GamePage";


function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hub" element={<SecondPage/>}/>
        <Route path="/game" element={<GamePage/> }/>
        <Route path="*" element={<Err404/> }/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
