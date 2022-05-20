function generateWordPositions(wordsCount, maxWidth, maxHeight) {
  const positions = [];

  for (let i = 0; i < wordsCount; i++) {
    const randomRight = Math.random() * maxWidth;
    const randomBottom = Math.random() * maxHeight;
    positions.push([randomBottom, randomRight]);
  }

  return positions;
}

export default generateWordPositions;
