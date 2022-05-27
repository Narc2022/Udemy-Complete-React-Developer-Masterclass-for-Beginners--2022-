import React, { component } from "react";
class Counter extends component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevstate) => {
      return { count: prevstate.count + 1 };
    });
  };
  render() {
    return (
      <div>{this.props.children(this.state.count, this.incrementcount)}</div>
    );
  }
}
export default Counter;
