import React from "react";

function GuessInput({ addResult, gameStatus }) {
  const [guessInput, setGuessInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addResult(guessInput);
    setGuessInput("");
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
        className="guess-input-wrapper"
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={gameStatus != "running"}
          pattern="[A-Z]{5}"
          title="5 letter word"
          value={guessInput}
          onChange={(event) => setGuessInput(event.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default GuessInput;
