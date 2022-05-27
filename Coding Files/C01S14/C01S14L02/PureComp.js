import React, { PureComponent } from "react";

class PureComp extends PureComponent {

  render() {
console.log('pure comp render')
    return (
      <div>
        <h1>pure component</h1>
      </div>
    );
  }
}

export default PureComp;

