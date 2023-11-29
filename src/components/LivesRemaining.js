import React from "react";

function LivesRemaining(props) {
  const { livesRemaining } = props;
  if (livesRemaining >= 0) {
    return <p>Lives Remaining: {livesRemaining}</p>;
  } else {
    return <p>Lives Remaining: 0</p>;
    //can we put game end here?
  }
}

export default LivesRemaining;
