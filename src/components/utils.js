
function resetWatch(arr) {
  let addWatched = arr.map((item) => ({
    ...item,
    watched: false,
  }));
  let addTemplateImg = addWatched.map((item) => ({
    ...item,
    templateImg: "public/Ghibli-card.png",
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

export { resetWatch, getRandomSelection, shuffle };
