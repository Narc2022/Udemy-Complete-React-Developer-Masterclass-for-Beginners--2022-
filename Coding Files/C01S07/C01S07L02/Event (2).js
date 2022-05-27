import React, { Component } from "react";
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Message: "hi",
    };
  }
  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        <button>Click</button>
      </div>
    );
  }
}
export default Event;
