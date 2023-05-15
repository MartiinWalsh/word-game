import React, { useState } from "react";

function GuessInput({ handleGuessSubmit, gameStatus }) {
  const [guessInput, setGuessInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setGuessInput("");
    handleGuessSubmit(guessInput);
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        minLength={5}
        maxLength={5}
        value={guessInput}
        onChange={(event) => {
          const upperCaseGuessInput = event.target.value.toUpperCase();
          setGuessInput(upperCaseGuessInput);
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
