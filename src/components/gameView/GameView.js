import React from 'react';

function GameView({ gameRules }) {
  return (
    <div className='game-view'>
      <h2>{gameRules.question}</h2>
      <div className='wordcloud'>
        {gameRules.all_words.map((word, index) => {
          return (
            <div className='word-container' key={index}>
              <p className='word'>{word}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GameView;
