import React from 'react';

function DisplayIfWordIsChosenCorrectly({ word, isClicked, isCorrectAnswer }) {
  if (isCorrectAnswer(word)) {
    return <p style={{ color: 'lightgreen' }}>Good</p>;
  } else if (isClicked) {
    return <p style={{ color: 'lightcoral' }}>Bad</p>;
  }
}

export default DisplayIfWordIsChosenCorrectly;
