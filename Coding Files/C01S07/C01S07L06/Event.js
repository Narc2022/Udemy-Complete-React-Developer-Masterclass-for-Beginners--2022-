import React, { Component } from "react";
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hi",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "dhoni",
    });
  }
  render() {
    return (
      <div>
        {" "}
        {this.state.message}
        <br />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
export default Event;
