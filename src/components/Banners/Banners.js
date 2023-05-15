import React from "react";

export function LostBanner({ answer, handleRestart }) {
  return (
    <div className={`sad banner`}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={handleRestart}>Restart game</button>
    </div>
  );
}

export function WonBanner({ numOfGuesses, handleRestart }) {
  return (
    <div className={`happy banner`}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
      </p>
      <button onClick={handleRestart}>Restart game</button>
    </div>
  );
}
