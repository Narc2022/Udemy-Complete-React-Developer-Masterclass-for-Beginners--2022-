import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} also known as {props.heroname}
      </h1>
    </div>
  );
};
export default Greet;
