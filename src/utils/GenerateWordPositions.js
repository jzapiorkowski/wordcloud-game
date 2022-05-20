function generateWordPositions(wordsCount, maxWidth, maxHeight) {
  const positions = [];

  for (let i = 0; i < wordsCount; i++) {
    let randomRight = Math.random() * maxWidth;
    let randomBottom = Math.random() * maxHeight;

    do {
      randomRight = Math.random() * (maxWidth - 20) + 20;
      randomBottom = Math.random() * (maxHeight - 10) + 10;

      checkIfPositionIsOkay(randomBottom, randomRight, positions);
    } while (checkIfPositionIsOkay(randomBottom, randomRight, positions));

    positions.push([randomBottom, randomRight]);
  }

  return positions;
}

function checkIfPositionIsOkay(bottom, right, allPositions) {
  let isCorrect = false;

  allPositions.forEach((currPosition) => {
    const [currBottom, currRight] = currPosition;
    if (
      Math.abs(currBottom - bottom) < 60 &&
      Math.abs(currRight - right) < 100
    ) {
      isCorrect = true;
    }
  });

  return isCorrect;
}

export default generateWordPositions;
