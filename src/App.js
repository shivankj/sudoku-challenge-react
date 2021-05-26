import React, { Component } from "react";
import { generateSudoku, checkSolution, shareUrl } from "./lib/sudokuFuncs";
import produce from "immer";
import "./App.css";

import SudokuBoard from "./components/SudokuBoard";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = produce({}, () => ({
      sudoku: generateSudoku(),
    }));

    window.sudoku = this.state.sudoku;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(
      produce((state) => {
        console.log("AAA");
        state.sudoku.rows[e.row].cols[e.col].value = e.value;
        if (!state.sudoku.solvedTime) {
          const solved = checkSolution(state.sudoku);
          if (solved) {
            state.sudoku.solveTime = new Date();
            state.sudoku.shareUrl = shareUrl(state.sudoku);
          }
        }
      })
    );

    console.log(this.state);
  }

  solveSudoku = (e) => {
    this.setState(
      produce((state) => {
        state.sudoku.rows.forEach((row) =>
          row.cols.forEach((col) => {
            col.value = state.sudoku.solution[col.row * 9 + col.col];
          })
        );
      })
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="">Sudoku Challenge</h1>
        </header>
        <SudokuBoard sudoku={this.state.sudoku} onChange={this.handleChange} />
        <button onClick={this.solveSudoku}>Solve it Magically!</button>
      </div>
    );
  }
}

export default App;
