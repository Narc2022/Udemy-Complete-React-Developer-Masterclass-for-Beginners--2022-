import React, { component } from "react";
import UpdatedComponent from "./counter";
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
        <h2 onMouseOver={this.incrementCount}>
          {this.props.name}hovered {count} times
        </h2>
      </div>
    );
  }
}
export default UpdatedComponent(Hover);
