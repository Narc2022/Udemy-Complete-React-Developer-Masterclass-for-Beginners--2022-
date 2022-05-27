import React from "react";
function ColorBlock() {
  let styles = {
    margin: "20px",
    width: "250px",
    height: "250px",
    backgroundColor: "yellow",
  };
  return (
    <div>
      <div className="square-box" style={styles}></div>
    </div>
  );
}
export default ColorBlock;
