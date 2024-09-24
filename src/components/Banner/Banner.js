import React from "react";

function Banner({ gameStatus, numOfGuesses, answer }) {
  return (
    <>
      {gameStatus === "won" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {""}
            <strong>{numOfGuesses} guesses</strong>.
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
