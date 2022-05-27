import React from "react";
import ReactDOM from "react";

const name = "Dhoni";

function Index() {
  const element = <h1>Hello,{name}.Welcome to Dataisgood.</h1>;
  ReactDOM.render(element, document.getElementById("root"));
}

export default Index;
