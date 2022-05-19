import React, { useEffect, useReducer, useRef } from 'react';
import DisplayIfWordIsChosenCorrectly from '../displayIfWordIsChosenCorrectly/DisplayIfWordIsChosenCorrectly';
import './wordContainer.scss';

function WordContainer({
  word,
  showAnswers,
  isCorrectAnswer,
  setCorrectWordsCount,
  setIncorrectWordsCount,
  correctWordsCount,
  incorrectWordsCount,
}) {
  const [clicked, setClicked] = useReducer((prevState) => !prevState, false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      if (isCorrectAnswer(word)) {
        clicked
          ? setCorrectWordsCount(correctWordsCount + 1)
          : setCorrectWordsCount(correctWordsCount - 1);
      } else {
        clicked
          ? setIncorrectWordsCount(incorrectWordsCount + 1)
          : setIncorrectWordsCount(incorrectWordsCount - 1);
      }
    } else {
      isMounted.current = true;
    }
  }, [clicked]);

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
