import React, { Component } from "react";

export default class Sudokufield extends Component {
  render() {
    const { value, readonly } = this.props.col;
    return <input className="field" value={value} readOnly={readonly} />;
  }
}
