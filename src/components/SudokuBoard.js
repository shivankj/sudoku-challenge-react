import React, { Component } from "react";

import Sudokufield from "./Sudokufield";
import Result from "./Result";
import Timer from "./Timer";

export default class SudokuBoard extends Component {
  render() {
    const { sudoku, onChange } = this.props;
    return (
      <div>
        {!sudoku.solveTime && <Timer start={sudoku.startTime} />}
        {sudoku.solveTime && <Result sudoku={sudoku} />}
        {this.props.sudoku.rows.map((row) => (
          <div className="row" key={row.index}>
            {row.cols.map((col) => (
              <Sudokufield col={col} key={col.col} onChange={onChange} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
