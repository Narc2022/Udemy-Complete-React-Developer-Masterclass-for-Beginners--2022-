import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
class ClickCounter1 extends Component {
  render() {
    console.log(this.props.name);
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name}Clicked {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter1, 5);
