import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    history: PropTypes.string,
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        {/* <div>Entry: {this.props.history}</div> */}
        <div>{this.props.value}</div>
      </div>
    );
  }
}
