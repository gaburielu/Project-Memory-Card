const Loading = () => {
  return <div className="loading-page">Loading</div>;
};

const PlayAgain = ({ setGame, score, setScore, highScore, setHighScore }) => {
  if(score > highScore){
    setHighScore(score)
  }
  const playAgainButton = () => {
    setScore(0);
    setGame("start");
  };
  const changeDifficulty = () => {
    setScore(0);
    setGame("prompt");
  };

  return (
    <div className="loading-page">
      <p>Last Score: {score}</p>
      <p>High Score: {highScore}</p>
      <button className="button-17" onClick={playAgainButton}>
        Play Again?
      </button>
      <button className="button-17" onClick={changeDifficulty}>
        Change Difficulty
      </button>
    </div>
  );
};

export { Loading, PlayAgain };
