import React from "react";
import "./App.css";
import CatComponent from "./Components/CatComponent";

function App() {
  return (
    <div className="App">
      <CatComponent catName age="4" />
    </div>
  );
}

export default App;
