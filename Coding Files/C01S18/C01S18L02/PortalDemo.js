import React from "react";
import ReactDOM from "react-dom";
function PortalDemo() {
  return ReactDOM.createportal(
    <h1>Portal demo</h1>,
    document.getelementbyid("portal-root")
  );
}
export default PortalDemo;
