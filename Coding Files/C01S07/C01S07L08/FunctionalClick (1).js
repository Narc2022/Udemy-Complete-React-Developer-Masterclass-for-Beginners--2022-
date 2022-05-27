import React from "react";

function FunctionalClick() {
  function greeting() {
    console.log("hello!");
    sayHello();
  }
  function sayHello() {
    console.log("hi");
  }
  return (
    <div>
      <button onClick={greeting}> I'm a button</button>
    </div>
  );
}

export default FunctionalClick;
