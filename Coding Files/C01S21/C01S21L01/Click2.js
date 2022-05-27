import React, { component } from "react";
class Click2 extends component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevstate) => {
      return { count: prevstate.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}
export default Click2;
