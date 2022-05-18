import React, { useReducer } from 'react';
import './wordContainer.scss';

function WordContainer({ word }) {
  const [clicked, setClicked] = useReducer((prevState) => !prevState, false);

  const handleClick = () => {
    setClicked();
  };

  return (
    <div className={`word-container ${clicked && 'clicked'}`}>
      <p className='word' onClick={handleClick}>
        {word}
      </p>
    </div>
  );
}

export default WordContainer;
