import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("--------Regular component--------");
    return (
      <div>
        <h1>Regular component{this.props.name}</h1>
      </div>
    );
  }
}

export default RegComp;
