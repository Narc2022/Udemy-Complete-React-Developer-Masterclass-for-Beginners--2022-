import React, { Component } from "react";

class UserMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: True,
    };
  }

  render() {
    {
      return this.state.isLoggedIn ? (
        <div>
          <h1>Welcome dhoni</h1>
        </div>
      ) : (
        <div> welcome Sachin</div>
      );
    }
  }
}

export default UserMessage;
