import React, { useReducer } from 'react';
import './wordContainer.scss';

function WordContainer({ word, showAnswers, isCorrectAnswer }) {
  const [clicked, setClicked] = useReducer((prevState) => !prevState, false);

  const handleClick = () => {
    setClicked();
  };

  const displayAnswerInfo = () => {
    if (showAnswers) {
      if (clicked) {
        return isCorrectAnswer(word) ? (
          <p className='good'>Good</p>
        ) : (
          <p className='bad'>Bad</p>
        );
      } else if (isCorrectAnswer(word) && !clicked) {
        return <p className='bad'>Bad</p>;
      }
    }
  };

  return (
    <div className={`word-container ${clicked && 'clicked'}`}>
      {displayAnswerInfo()}
      <p className='word' onClick={handleClick}>
        {word}
      </p>
    </div>
  );
}

export default WordContainer;
