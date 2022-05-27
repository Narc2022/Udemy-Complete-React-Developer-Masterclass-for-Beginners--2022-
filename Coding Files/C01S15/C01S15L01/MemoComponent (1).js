import React, { Component } from "react";
import MemoComponent from "./MemoComponent";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dhoni",
    };
  }
  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          name: "Dhoni",
        }),
      2000
    );
  }

  render() {
    console.log("--------parent component--------");
    return (
      <div>
        <h1> Parent component</h1>
        <MemoComponent name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;


