import './App.css';
import Three from './Three';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header">{/* <Three /> */}</header>

          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </Router>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
