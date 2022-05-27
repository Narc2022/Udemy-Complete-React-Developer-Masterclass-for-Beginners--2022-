import React, { Component } from "react";
import "./appStyles.css";
import Click2 from "./Components/Click2";
import Hover2 from "./Components/Hover2";
import Counter from "./Components/Counter";

import React from "react";

function App() {
  return (
    <div>
      <Counter>
        {(count, incrementCount) => (
          <Click2 count={count} incrementcount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <Hover2 count={count} incrementcount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;
