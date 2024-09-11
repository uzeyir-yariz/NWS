import { Route, Routes } from "react-router-dom";

// uzuvlar
import Nav from "./components/nav";

// pages
import Home from "./pages/Home";
import SecondPage from "./pages/Content";
import Err404 from "./pages/Err404";


function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/content" element={<SecondPage/>}/>
        <Route path="*" element={<Err404/> }/>
      </Routes>

    </div>
  );
}

export default App;
