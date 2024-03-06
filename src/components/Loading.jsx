const Loading = () => {
  return <div className="loading-page">Loading</div>;
};

const PlayAgain = ({ setGame }) => {
  const playAgainButton = () => {
    setGame("start");
  };
  const changeDifficulty = () => {
    setGame("prompt");
  };
  return (
    <div className="loading-page">
      AGAIN?
      <button onClick={playAgainButton}>play again</button>
      <button onClick={changeDifficulty}>change difficulty</button>
    </div>
  );
};

export { Loading, PlayAgain };
