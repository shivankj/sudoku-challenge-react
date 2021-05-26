import React, { Component } from "react";

export default class Sudokufield extends Component {
  constructor(props) {
    super(props);

    //   this.state = {
    //     value: this.props.col.value,
    //   };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let num = Number(e.target.value);
    num = isNaN(num) ? "" : num % 10 === 0 ? "" : num % 10;
    // this.setState({ value: num });
    this.props.onChange({ ...this.props.col, value: num });
  }

  render() {
    const { col } = this.props;
    return (
      <input
        className="field"
        onChange={this.handleChange}
        value={col.value}
        readOnly={col.readonly}
      />
    );
  }
}
