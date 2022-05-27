import React, { Component } from "react";

export class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hi",
    };
  }

  clickHandler() {
    this.setState({
      message: "Dhoni",
    });
  }

  render() {
    return (
      <div>
        {this.state.message}
        <br />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default Event;
