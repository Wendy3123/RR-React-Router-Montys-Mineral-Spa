import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Packages";

function App() {
  const packages = [
    "Activate your Crystals",
    "Monkey Meditation",
    "Soak in the Hotsprings",
    "Hypnotherapy",
    "Mineral Bath",
  ];

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-US">About</Link>
              </li>
              <li>
                <Link to="/our-packages">Our Packages</Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="display">
          {/* THE LINK TO ABOVE NEEDS TO BE LINKED TO THE SAME NAME AS THE PATH IN OUR ROUTE OR IT WONT WORK */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-US" element={<About />} />
            <Route
              path="/our-packages"
              element={<Packages packages={packages} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
