import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "dhoni",
    };
    console.log("Lifecycle A constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle A Static getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("life cycle A componentdidmount");
  }
  shouldComponentUpdate() {
    console.log("life cycle A shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("life cycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("life cycle A componentdidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "dataisgood",
    });
  };

  render() {
    console.log("lifecycle A render");

    return (
      <div>
        <h1> Life cycle A</h1>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
