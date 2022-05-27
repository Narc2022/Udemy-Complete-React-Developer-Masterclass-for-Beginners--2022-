import React, { component } from "react";
class Hover2 extends component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
      </div>
    );
  }
}
export default Hover2;
