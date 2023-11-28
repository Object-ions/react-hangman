import React from "react";
import StartScreen from "./StartScreen";
import GameBoard from "./GameBoard";
import GuessForm from "./GuessForm";
import LettersUsed from "./LettersUsed";
import LivesRemaining from "./LivesRemaining";
import WordList from "./WordList";

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOverStatus: false,
      livesRemaining: 6,
      wordList: [],
      lettersUsed: [],
      gameBoard: [],
    };
  }

  handleStartClick = () => {
    // dis redux below
  };

  render() {
    return (
      <React.Fragment>
        <StartScreen />
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
