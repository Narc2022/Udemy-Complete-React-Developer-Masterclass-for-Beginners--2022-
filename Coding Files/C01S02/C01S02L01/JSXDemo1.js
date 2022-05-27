import React from "react";
import ReactDOM from "react-dom";

class JSXDemo extends React.Component {
  render() {
    return <h1>This is JSX</h1>;
  }
}
export default JSXDemo;

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
