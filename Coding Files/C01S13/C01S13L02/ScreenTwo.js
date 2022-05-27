import React, { Component } from "react";
import Heading from "./Heading";

class ScreenTwo extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Heading message={"Custom Heading for Screen Two"} />
        </h1>
      </div>
    );
  }
}

export default ScreenTwo;
