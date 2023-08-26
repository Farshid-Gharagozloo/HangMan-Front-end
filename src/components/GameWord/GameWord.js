import "./GameWord.scss";

function GameWord({ word, guesses, solved }) {
  return (
    <div className="game-word">
      {word.map((letter, idx) => {
        const value = guesses.includes(letter) || solved ? letter : "";
        if (letter === " "){
          return (
            <div className="game-word__space" key={idx}> </div>
          );
        }
        else {
          return (
            <div className="game-word__letter" key={idx}>
              {value}
            </div>
          );
        }
      })}
    </div>
  );
}

export default GameWord;
