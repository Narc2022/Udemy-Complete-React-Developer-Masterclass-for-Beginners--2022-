import React, { Component } from "react";

class UserMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Dhoni</div>;
    } else {
      return;
      <div>Welcome Sachin</div>;
    }
  }
}

export default UserMessage;
