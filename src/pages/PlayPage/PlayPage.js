import { useEffect, useState } from "react";
import { getRandomWord } from "../../api";
import "./PlayPage.scss";
import GameWord from "../../components/GameWord/GameWord";
import GameStatus from "../../components/GameStatus/GameStatus";
import GameButtons from "../../components/GameButtons/GameButtons";

function PlayPage() {
  const [word, setWord] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [remaining, setRemaining] = useState(7);
  const [solved, setSolved] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [status, setStatus] = useState(null);
  const [image, setimage] = useState("");

  useEffect(() => {
    if (refresh) {
      getRandomWord().then((word) => {
        setWord(word.name.toLowerCase().split(""));
        setimage(word.image);
        
      });
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    const wordLetters = word.join().replaceAll(' ', '').replaceAll(',', '').split("");
    if (wordLetters.every((letter) => guesses.includes(letter))) {
      setStatus("won");
    } else if (remaining === 0) {
      setStatus("lost");
    } else {
      setStatus(null);
    }
  }, [word, guesses, remaining]);

  const resetGame = () => {
    setGuesses([]);
    setRemaining(7);
    setRefresh(true);
    setSolved(false);
    setStatus(null);
  };

  const showSolution = () => {
    setSolved(true);
  };

  return (
    <>
      <GameWord word={word} guesses={guesses} solved={solved} />
      <GameButtons
        word={word}
        guesses={guesses}
        status={status}
        setGuesses={setGuesses}
        setRemaining={setRemaining}
      />
      <GameStatus
        status={status}
        remaining={remaining}
        solve={showSolution}
        reset={resetGame}
        image_src={image}
      />
    </>
  );
}

export default PlayPage;
