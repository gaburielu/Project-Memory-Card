const asyncOperation = async () => {
  const image = new Image();
  image.src = "src/assets/Ghibli-card.png";
  await image.decode();
};

function resetWatch(arr) {
  let addWatched = arr.map((item) => ({
    ...item,
    watched: false,
  }));
  let addTemplateImg = addWatched.map((item) => ({
    ...item,
    templateImg: "src/assets/Ghibli-card.png",
  }));

  return addTemplateImg;
}

function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

function getRandomSelection(number, objArray) {
  const selectedObjects = shuffle(objArray.slice(0, number));
  return selectedObjects;
}

asyncOperation();

export { resetWatch, getRandomSelection, shuffle };
