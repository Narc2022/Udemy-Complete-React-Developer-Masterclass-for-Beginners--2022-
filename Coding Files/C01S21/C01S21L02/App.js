import React, { Component } from "react";
import "./appStyles.css";
import Click2 from "./Components/Click2";
import Hover2 from "./Components/Hover2";
import User from "./Components/User";

import React from "react";

function App() {
  return (
    <div>
      <Click2 />
      <Hover2 />
      <User name={(isLoggedIn) => (isLoggedIn ? "dataisgood" : "guest")} />
    </div>
  );
}

export default App;
