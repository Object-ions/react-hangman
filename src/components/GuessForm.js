import React from "react";
import PropTypes from "prop-types";

function GuessForm(props) {
  function handleLetterGuess(event) {
    event.preventDefault();
    props.onLetterSubmission({
      letter: event.target.letter.value,
    });

    //call on method to check if the letter has already been submitted

    //
  }

  return (
    <>
      <form onSubmit={handleLetterGuess}>
        <input type="submit" name="letter" placeholder="enter letter here" maxLength="1" />
      </form>
    </>
  );
}

GuessForm.propTypes = {
  // ??
};

export default GuessForm;
