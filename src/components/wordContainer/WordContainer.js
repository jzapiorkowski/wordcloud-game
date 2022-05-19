import React, { useReducer } from 'react';
import DisplayIfWordIsChosenCorrectly from '../displayIfWordIsChosenCorrectly/DisplayIfWordIsChosenCorrectly';
import './wordContainer.scss';

function WordContainer({ word, showAnswers, isCorrectAnswer }) {
  const [clicked, setClicked] = useReducer((prevState) => !prevState, false);

  const handleClick = () => {
    !showAnswers && setClicked();
  };

  return (
    <div className={`word-container ${clicked && 'clicked'}`}>
      {showAnswers && (
        <DisplayIfWordIsChosenCorrectly
          isClicked={clicked}
          isCorrectAnswer={isCorrectAnswer}
          word={word}
        />
      )}
      <p className='word' onClick={handleClick}>
        {word}
      </p>
    </div>
  );
}

export default WordContainer;
