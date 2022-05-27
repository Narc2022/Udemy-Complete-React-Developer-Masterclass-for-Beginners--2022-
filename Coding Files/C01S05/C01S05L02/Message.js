import React, { Component } from "react";

export class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "welcome visitor",
    };
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}

export default Message;
