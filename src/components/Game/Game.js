import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Keyboard from "../Keyboard";
import { WonBanner, LostBanner } from "../Banners/Banners";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));

  const [guessResults, setGuessResults] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  function handleGuessSubmit(currentGuess) {
    const newGuessResults = [...guessResults, currentGuess];
    setGuessResults(newGuessResults);

    if (currentGuess === answer) {
      setGameStatus("won");
    } else if (newGuessResults.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuessResults([]);
    setGameStatus("running");
  }

  const validatedGuesses = guessResults.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        gameStatus={gameStatus}
      />
      <Keyboard validatedGuesses={validatedGuesses} />

      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guessResults.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
