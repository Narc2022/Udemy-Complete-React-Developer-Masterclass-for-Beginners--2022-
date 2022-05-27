import React from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
      </switch>
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default App;
