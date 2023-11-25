import "./App.css";
import Three from "./Three";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="App">
          <header className="App-header">{/* <Three /> */}</header>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
