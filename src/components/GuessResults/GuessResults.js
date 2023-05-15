import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import Guess from "../Guess/Guess";

function GuessResults({ guessResults, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} guess={guessResults[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
