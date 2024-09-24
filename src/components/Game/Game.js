import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";
import Banner from "../Banner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function addResult(guessInput) {
    const nextResults = [...results, guessInput];
    setResults(nextResults);
    if (guessInput === answer) {
      setGameStatus("won");
    } else if (nextResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResult results={results} answer={answer}></GuessResult>

      <GuessInput addResult={addResult} gameStatus={gameStatus}></GuessInput>

      {gameStatus != "running" && (
        <Banner
          gameStatus={gameStatus}
          numOfGuesses={results.length}
          answer={answer}
        ></Banner>
      )}
    </>
  );
}

export default Game;
