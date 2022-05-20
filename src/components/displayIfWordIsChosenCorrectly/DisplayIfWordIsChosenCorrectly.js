import React from 'react';

function DisplayIfWordIsChosenCorrectly({ word, isClicked, isCorrectAnswer }) {
  if (isCorrectAnswer(word)) {
    return <p>Good</p>;
  } else if (isClicked) {
    return <p>Bad</p>;
  }
}

export default DisplayIfWordIsChosenCorrectly;
