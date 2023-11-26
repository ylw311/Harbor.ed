import "./App.css";
import Three from "./Three.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.js";

import Main from "./components/main.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Cards from "./components/Cards.js";
import Journal from "./components/Journal.js";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <div className="App">
          {/* <header className="App-header">
            <Three />
          </header> */}

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/chat" element={<Main />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/character" element={<Cards />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
