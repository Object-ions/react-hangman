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
      gameBoard: ["_ ", "_ ", "_ ", "_ ", "_"],
    };
  }

  handleStartClick = () => {
    this.setState({
      gameOverStatus: false,
      livesRemaining: 6,
      lettersUsed: [],
      gameBoard: ["_ ", "_ ", "_ ", "_ ", "_"],
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
    // <GameBoard gameBoard={this.state.gameBoard} />;

    if (this.state.gameOverStatus === true) {
      startGameButton = "Start New Game";
    } else {
      startGameButton = "Restart Game";
    }
    return (
      <React.Fragment>
        <Header />
        <button onClick={this.handleStartClick}>{startGameButton}</button>
        <GuessForm onLetterSubmission={this.checkIfLetterIsInHiddenWord} />
        <GameBoard gameBoard={this.state.gameBoard} />
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

// checkIfLetterIsInHiddenWord = (letter) => {
//   const matchingIndexPositions = []; //an array of index locations of where the letter shows up in our hidden word
//   if (!this.state.lettersUsed.contains(letter)) {
//     // if the letter entered is not in "lettersUsed"
//     if (this.state.hiddenWord.contains(letter)) {
//       // Then, we check through the "hiddenWord" for matching characters, noting the index location(s)
//       let indexes = this.state.hiddenWord.indexOf(letter);
//       while (indexes !== -1) {
//         //find the index of the letter in the hidden word, and add it to the game board at the same index
//         matchingIndexPositions.push(indexes);
//         indexes = this.state.hiddenWord.indexOf(letter, indexes + 1);
//       }
//       // now we update this.state.gameBoard, replacing at "_" with the letter at index locations
//       for (let i = 0; i < this.state.gameBoard.length; i++) {
//         for (let j = 0; j < matchingIndexPositions.length; j++) {
//           if (
//             valueOf(matchingIndexPositions[j]) === this.state.gameBoard[i]
//           ) {
//             this.state.gameBoard[i] = letter;
//           }
//         }
//       }
//     }
//   }
// };
