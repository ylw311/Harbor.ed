import "./App.css";
import Three from "./Three.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Cards from "./components/Cards.js";

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
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/character-selection" element={<Cards />} /> 
            {/* or switch to characcters for fishyyyyyyyyyyy */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
