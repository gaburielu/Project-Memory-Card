const Prompt = ({
  gameRound,
  difficulty,
  handleButtonClick,
  setDifficultyToEasy,
  setDifficultyToMedium,
  setDifficultyToHard,
}) => {
  return (
    <div>
      <div className="button-group">
        <button
          className={difficulty === 6 ? "active" : ""}
          onClick={setDifficultyToEasy}
        >
          Easy
        </button>
        <button
          className={difficulty === 12 ? "active" : ""}
          onClick={setDifficultyToMedium}
        >
          Medium
        </button>
        <button
          className={difficulty === 20 ? "active" : ""}
          onClick={setDifficultyToHard}
        >
          Hard
        </button>
      </div>
      <p>{String(gameRound)}</p>
      <button onClick={handleButtonClick}>test</button>
    </div>
  );
};

export default Prompt;
