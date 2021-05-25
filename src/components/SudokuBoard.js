import React, { Component } from "react";

import Sudokufield from "./Sudokufield";

export default class SudokuBoard extends Component {
  render() {
    return (
      <div>
        {this.props.sudoku.rows.map((row) => (
          <div>
            {row.cols.map((col) => (
              <Sudokufield col={col} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
