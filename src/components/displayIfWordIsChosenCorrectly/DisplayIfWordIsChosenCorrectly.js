import React from 'react';

function DisplayIfWordIsChosenCorrectly({ word, isClicked, isCorrectAnswer }) {
  if (isClicked) {
    return isCorrectAnswer(word) ? (
      <p className='good'>Good</p>
    ) : (
      <p className='bad'>Bad</p>
    );
  } else if (isCorrectAnswer(word) && !isClicked) {
    return <p className='bad'>Bad</p>;
  }
}

export default DisplayIfWordIsChosenCorrectly;
