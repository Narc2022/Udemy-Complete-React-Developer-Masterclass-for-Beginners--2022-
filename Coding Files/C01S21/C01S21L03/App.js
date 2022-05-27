import React, { Component } from "react";
import "./appStyles.css";
import Click2 from "./Components/Click2";
import Hover2 from "./Components/Hover2";
import Counter from "./Components/Counter";

import React from "react";

function App() {
  return (
    <div>
      <Counter
        render={(count, incrementCount) => (
          <Click2 count={count} incrementcount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <Hover2 count={count} incrementcount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
