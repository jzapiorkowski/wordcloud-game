import React from 'react';

function GameSummary({ nickname, gameScore }) {
  return (
    <div className='game-summary'>
      <h2>Congratulations, {nickname}!</h2>
      <h3>Your score:</h3>
      <h3 className='score' style={{ color: '#7fc0e9' }}>
        {gameScore} points
      </h3>
    </div>
  );
}

export default GameSummary;
