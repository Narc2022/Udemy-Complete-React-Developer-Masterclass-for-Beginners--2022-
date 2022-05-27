import React, { Component } from "react";
import withCounter from "./withCounter";
class Hover1 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>Hovered{count} times</h2>;
  }
}

export default withCounter(Hover1, 10);
