import React from "react";

function FunctionalClick() {
  function greeting() {
    console.log("hello!");
  }
  function sayHello() {
    console.log("hi");
  }
  return (
    <div>
      <button
        onClick={() => {
          greeting();
          sayHello();
        }}
      >
        I'm a button
      </button>
    </div>
  );
}

export default FunctionalClick;
