import React from "react";
function FunctionalClick() {
  return (
    <div>
      <button
        onClick={() => {
          console.log("hello!");
          console.log("hi");
        }}
      >
        I'm a button
      </button>
    </div>
  );
}
export default FunctionalClick;
