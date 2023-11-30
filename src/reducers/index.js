import livesRemainingReducer from "./lives-remaining-reducer";
import gameOverStatusReducer from "./game-over-status-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  livesRemaining: livesRemainingReducer,
  gameOverStatus: gameOverStatusReducer,
});

export default rootReducer;
