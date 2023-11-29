import React from "react";
import PropTypes from "prop-types";

function GuessForm(props) {
  function handleLetterGuess(event) {
    event.preventDefault();
    props.onLetterSubmission(event.target.letter.value.toLowerCase());

    //call on method to check if the letter has already been submitted

    //
  }

  return (
    <>
      <form onSubmit={handleLetterGuess}>
        <input
          type="text"
          name="letter"
          placeholder="enter letter here"
          minLength="1"
          maxLength="1"
        />
      </form>
    </>
  );
}

GuessForm.propTypes = {
  onLetterSubmission: PropTypes.func.isRequired,
};

export default GuessForm;
