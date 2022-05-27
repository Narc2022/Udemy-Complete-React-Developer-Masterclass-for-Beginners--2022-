import React from "react";
import Heading from "./Heading";

export class ScreenOne extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Heading message={"Custom Heading for Screen One"} />
        </h1>
      </div>
    );
  }
}

export default ScreenOne;
