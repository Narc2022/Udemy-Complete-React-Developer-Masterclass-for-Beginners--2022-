import React from "react";

const FunctionClick = () => {
  function sayHello(name) {
    alert(`hello,$(name)`);
  }

  return <button onClick={() => sayHello("dhoni")}>click</button>;
};
export default FunctionClick;
