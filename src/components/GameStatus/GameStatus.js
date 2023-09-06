import "./GameStatus.scss";

function GameStatus({ remaining, status, reset, solve, image_src}) {
  if (status === "won") {
    return (
      <>
      <div className="game-status game-status--won">
        <div>Congratulations! You Won!</div>
        <button onClick={() => reset()}>Play Again</button>
      </div>
      <div className="guess_img">
        <img src={image_src} alt="guess_the_picture" className="guess_img__show"/>
      </div>
    </>
    );
  } else if (status === "lost") {
    return (
      <>
      <div className="game-status game-status--lost">
        <div>Oops! You Lost!!</div>
        <button onClick={() => solve()}>Show Solution</button>
        <button onClick={() => reset()}>Play Again</button>
      </div>
      <div className="guess_img">
        <img src={image_src} alt="guess_the_picture" className="guess_img__show"/>
      </div>
    </>
    );
  } else {
    return (
      <>
      <div className="game-status game-status--guesses">
        Remaining guesses: {remaining}
      </div>
      <div className="guess_img">
        <img src={image_src} alt="guess_the_picture" className="guess_img__data"/>
      </div>
    </>
    );
  }
}

export default GameStatus;
