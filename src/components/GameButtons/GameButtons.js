import "./GameButtons.scss";

function GameButtons({ word, guesses, status, setGuesses, setRemaining }) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const isCorrect = (letter) => {
    return guesses.includes(letter) && word.includes(letter);
  };

  const isIncorrect = (letter) => {
    return guesses.includes(letter) && !word.includes(letter);
  };

  const isDisabled = (letter) => {
    return isCorrect(letter) || isIncorrect(letter) || status !== null;
  };

  const getClassName = (letter) => {
    let className = `game-buttons__letter`;
    if (isCorrect(letter)) {
      return `${className} ${className}--correct`;
    } else if (isIncorrect(letter)) {
      return `${className} ${className}--incorrect`;
    } else {
      return `${className}`;
    }
  };

  const handleClick = (event, letter) => {
    event.preventDefault();

    setGuesses((guesses) => [...guesses, letter]);
    if (!word.includes(letter)) {
      setRemaining((remaining) => remaining - 1);
    }
  };

  return (
    <div className="game-buttons">
      {alphabet.map((letter, idx) => (
        <button
          key={idx}
          className={getClassName(letter)}
          disabled={isDisabled(letter)}
          onClick={(e) => handleClick(e, letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default GameButtons;
