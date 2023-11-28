import React from "react";
import PropTypes from "prop-types";

function GuessForm(props) {
  function handleLetterGuess(event) {
    event.preventDefault();
    props.onLetterSubmission({
      letter: event.target.letter.value,
    });

    //call on method to check if the letter has already been submitted
    //call on method to check if the letter is in the hidden word
    //
  }

  return (
    <>
      <form onSubmit={props.IHAVENOIDEAWHATGOESHERE}>
        <input type="text" name="letter" placeholder="enter letter here" maxLength="1" />
      </form>
    </>
  );
}

GuessForm.propTypes = {
  // ??
};

export default GuessForm;
