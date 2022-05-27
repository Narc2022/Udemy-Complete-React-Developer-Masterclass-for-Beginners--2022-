import React, { component } from "react";
class Hover extends component {
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
        <h2 onMouseOver={this.incrementCount}>hovered {count} times</h2>
      </div>
    );
  }
}
export default Hover;
