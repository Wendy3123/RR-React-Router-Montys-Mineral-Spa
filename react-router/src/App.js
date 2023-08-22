import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Packages";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function App() {
  const packages = [
    "Activate your Crystals",
    "Monkey Meditation",
    "Soak in the Hotsprings",
    "Hypnotherapy",
    "Mineral Bath",
    "Rose Oil Massage",
    "Exfoliating Back Scrub",
  ];

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>
          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Nav.Link href="/">
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link eventKey={"about-US"}>
                  <Link to="/about-US">About</Link>
                </Nav.Link>
                <Nav.Link eventKey={"our-packages"}>
                  <Link to="/our-packages">Our Packages</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
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
