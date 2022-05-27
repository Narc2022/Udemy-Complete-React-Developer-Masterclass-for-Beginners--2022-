import React, { Component } from "react";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <label>Email</label>
        <input type="text" name="email" onChange={this.handleOnChange} />
        <br />
        <label>Password</label>
        <input type="password" name="password" onChange={this.handleOnChange} />
      </form>
    );
  }
}

export default Login;
