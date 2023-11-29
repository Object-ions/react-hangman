import React from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import GuessForm from "./GuessForm";
import GameOverMessage from "./GameOverMessage";
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
      //add spaces
    };
  }

  handleStartClick = () => {
    this.setState({
      gameOverStatus: false,
      livesRemaining: 6,
      lettersUsed: [],
      gameBoard: ["_", "_", "_", "_", "_"],
    });
  };

  checkIfLetterIsInHiddenWord = (letter) => {
    //p comes in
    if (!this.state.lettersUsed.includes(letter)) {
      //check if the letter has NOT been used
      if (this.state.hiddenWord.includes(letter)) {
        // check if the letter is in the hidden word

        // Update the game board with the guessed letter
        // p         --> letter entered
        // --------------------------------------
        // 0 1 2 3 4 --> Indexes
        // _ _ _ _ _ --> GameBoard
        // a p p l e --> HiddenWord
        // 0 1 2 3 4 --> Indexes of HiddenWord Char
        // _ p p _ _ --> GameBoard (updated after letter 'p' replaced on indexes 1 and 2)

        //newGameBoard is a copy of the gameBoard, but for each char at each index position
        //IF the hidden word is equal to the letter passed in at an index, make the char in the newGameBoard equal to the letter at the same index
        const newGameBoard = this.state.gameBoard.map((char, index) =>
          this.state.hiddenWord[index] === letter ? letter : char
        );

        this.setState((prevState) => ({
          gameBoard: newGameBoard,
          lettersUsed: [...prevState.lettersUsed, letter],
        }));
      } else {
        // Decrement lives if the guessed letter is not in the hidden word
        this.setState((prevState) => ({
          livesRemaining: prevState.livesRemaining - 1,
          lettersUsed: [...prevState.lettersUsed, letter],
        }));
      }
    }
  };

  render() {
    let startGameButton = null;
    let gameEnd = null;
    if (this.state.gameOverStatus === true) {
      startGameButton = "Start New Game";
    } else {
      startGameButton = "Restart Game";
    }
    if (this.state.livesRemaining === 0 && this.state.gameOverStatus === true) {
      gameEnd = "You lose.";
    } else if (!this.state.gameBoard.includes("_")) {
      gameEnd = "You win.";
    }
    return (
      <React.Fragment>
        <Header />
        <button onClick={this.handleStartClick}>{startGameButton}</button>
        <GameOverMessage message={gameEnd} />
        <GuessForm onLetterSubmission={this.checkIfLetterIsInHiddenWord} />
        <GameBoard gameBoard={this.state.gameBoard} />
        <LettersUsed lettersUsed={this.state.lettersUsed} />
        <LivesRemaining livesRemaining={this.state.livesRemaining} />
      </React.Fragment>
    );
  }
}

export default GameControl;
