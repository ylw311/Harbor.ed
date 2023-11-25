import './App.css';
import Three from './Three'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/main.js';

function App() {
  return (
    <Router>
      <div className="App">
      {/* below is for 3js */}
        {/* <header className="App-header">
        Help
          <Three />
        </header>
         */}
        <Routes>
  <Route path="/" element={<Main />} />
</Routes>
      </div>
    </Router>
  );
}

export default App;
