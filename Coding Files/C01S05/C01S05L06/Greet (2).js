import React from "react";

const Greet = ({ name, heroname }) => {
  return (
    <div>
      <h1>
        Hello {name} also known as {heroname}
      </h1>
    </div>
  );
};
export default Greet;
