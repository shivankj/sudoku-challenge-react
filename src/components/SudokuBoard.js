import React, { Component } from "react";

import Sudokufield from "./Sudokufield";

export default class SudokuBoard extends Component {
  render() {
    return (
      <div>
        {this.props.sudoku.rows.map((row) => (
          <div className="row" key={row.index}>
            {row.cols.map((col) => (
              <Sudokufield
                col={col}
                key={col.col}
                onChange={this.props.onChange}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
