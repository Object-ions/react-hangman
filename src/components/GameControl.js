import React from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import GuessForm from "./GuessForm";
import LettersUsed from "./LettersUsed";
import LivesRemaining from "./LivesRemaining";

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOverStatus: true,
      livesRemaining: 6,
      hiddenWord: "apple",
      lettersUsed: [],
      gameBoard: ["_", "_", "_", "_", "_"],
    };
  }

  handleStartClick = () => {
    this.setState({
      gameOverStatus: false,
      livesRemaining: 6,
      lettersUsed: [],
    });
  };

  checkIfLetterIsInHiddenWord = (letter) => {
    const matchingIndexPositions = [];
    if (!this.state.lettersUsed.contains(letter)) {
      // if the letter entered is not in "lettersUsed"
      if (this.state.hiddenWord.contains(letter)) {
        // Then, we check through the "hiddenWord" for matching characters, noting the index location(s)
        let indexes = this.state.hiddenWord.indexOf(letter);
        while (indexes !== -1) {
          //find the index of the letter in the hidden word, and add it to the game board at the same index
          matchingIndexPositions.push(indexes);
          indexes = this.state.hiddenWord.indexOf(letter, indexes + 1);
        }
        // now we update this.state.gameBoard, replacing at "_" with the letter at index locations
        for (let i = 0; i < this.state.gameBoard.length; i++) {
          for (let j = 0; j < matchingIndexPositions.length; j++) {
            if (valueOf(matchingIndexPositions[j]) === this.state.gameBoard[i]) {
              this.state.gameBoard[i] === letter;
            }
          }
        }
      }
    }
  };

  render() {
    let startGameButton = null;
    if (this.state.gameOverStatus === true) {
      startGameButton = "Start New Game";
    } else {
      startGameButton = "Restart Game";
    }
    return (
      <React.Fragment>
        <Header />
        <button onClick={this.handleStartClick}>{startGameButton}</button>
        <GuessForm />
        <GameBoard />
        <LettersUsed />
        <LivesRemaining />
      </React.Fragment>
    );
  }
}

export default GameControl;

// const { dispatch } = this.props;
// const action = {
//   type: "TOGGLE_START_GAME",
// };
// dispatch(action);
