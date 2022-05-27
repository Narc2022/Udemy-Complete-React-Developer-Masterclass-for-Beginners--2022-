import React from "react";

function Hero({ heroName }) {
  if (heroName === "batman") {
    throw new Error("not a hero");
  }

  return (
    <div>
      <div>
        <h1>{heroName}</h1>
      </div>
    </div>
  );
}

export default Hero;
