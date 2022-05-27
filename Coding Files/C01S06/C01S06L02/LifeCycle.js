import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "dhoni",
    };
    console.log("Lifecycle  constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle Static getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("life cycle A componentdidmount");
  }

  render() {
    console.log("lifecycle render");

    return (
      <div>
        <h1> Life cycle </h1>
      </div>
    );
  }
}

export default LifeCycle;
