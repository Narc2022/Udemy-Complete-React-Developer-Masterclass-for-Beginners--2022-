import React, { component } from "react";
import UpdatedComponent from "./counter";

class Click extends component {
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
        <button onClick={this.incrementCount}>
          {this.props.name}Clicked {count} times
        </button>
      </div>
    );
  }
}
export default UpdatedComponent(Click);
