import React, { Component } from "react";
import ComponentF from "../Components/ComponentF";
import UserContext from "../Components/UserContext";

class ComponentE extends Component {
  render() {
    return (
      <div>
        ComponentE context {this.context}
        <ComponentF />
      </div>
    );
  }
}

ComponentE.contextType = UserContext;
export default ComponentE;
