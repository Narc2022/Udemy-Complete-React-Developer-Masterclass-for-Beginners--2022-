import React from "react";
const Counter = (WrappedComponent) => {
  class Counter extends React.Component {
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
        <wrappedComponent
          count={this.state.count}
          incrementcount={this.incrementcount}
        />
      );
    }
  }
  return Counter;
};
export default Counter;
