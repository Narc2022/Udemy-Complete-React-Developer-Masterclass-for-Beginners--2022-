import React, { Component } from "react";
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hi",
    };
  }
  clickHandler() {
    this.setState({
      Message: "dhoni",
    });
  }
  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}
export default Event;
