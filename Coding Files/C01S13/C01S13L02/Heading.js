import React from "react";
import PropTypes from "prop-types";

class Heading extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}
Heading.propTypes = {
  message: "dhoni",
};
Heading.defaultProps = {
  message: "Heading One",
};

export default Heading;
