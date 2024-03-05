function resetWatch(arr) {
  let newArr = arr.map((item) => ({
    ...item,
    watched: false,
  }));
  return newArr;
}

function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

function getRandomSelection(number, objArray) {
  const shuffledArray = objArray.sort(() => Math.random() - 0.5);
  const selectedObjects = shuffledArray.slice(0, number);

  return selectedObjects;
}

export { resetWatch };
