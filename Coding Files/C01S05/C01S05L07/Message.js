import React, { Component } from "react";

export class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "welcome visitor",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <h1>
        {this.state.message}
        <br />
        <button onClick={() => this.changeMessage()}>subscribe</button>
      </h1>
    );
  }
}

export default Message;
