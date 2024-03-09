const Prompt = ({
  gameRound,
  difficulty,
  handleButtonClick,
  setDifficultyToEasy,
  setDifficultyToMedium,
  setDifficultyToHard,
}) => {
  return (
    <div className="prompt">
      <div className="button-group">
        <button
          className={`button-17 ${difficulty === 6 ? "active" : ""}`}
          onClick={setDifficultyToEasy}
        >
          Easy
        </button>
        <button
          className={`button-17 ${difficulty === 12 ? "active" : ""}`}
          onClick={setDifficultyToMedium}
        >
          Medium
        </button>
        <button
          className={`button-17 ${difficulty === 20 ? "active" : ""}`}
          onClick={setDifficultyToHard}
        >
          Hard
        </button>
      </div>
      <button className="button-17" onClick={handleButtonClick}>
        Start Game
      </button>
    </div>
  );
};

export default Prompt;
