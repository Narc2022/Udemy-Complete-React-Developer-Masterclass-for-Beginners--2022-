import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "dhoni",
    };
    console.log("Lifecycle B constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle B Static getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("life cycle B componentdidmount");
  }
  shouldComponentUpdate() {
    console.log("life cycle B shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("life cycle B getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("life cycle B componentdidUpdate");
  }
  changestate = () => {
    this.setstate({
      name: "dataisgood",
    });
  };

  render() {
    console.log("lifecycle B render");

    return (
      <div>
        <h1> Life cycle B</h1>
      </div>
    );
  }
}

export default LifeCycleB;
