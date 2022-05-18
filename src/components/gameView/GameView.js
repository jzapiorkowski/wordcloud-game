import React, { useEffect, useState } from 'react';
import WordContainer from '../wordContainer/WordContainer';
import gameRules from './GameRules.json';

function GameView() {
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [gameQuestion, setGameQuestion] = useState('');
  const [allWords, setAllWords] = useState([]);
  const [goodWords, setGoodWords] = useState([]);

  const handleGameSubmit = () => {
    setCheckAnswers(true);
  };

  useEffect(() => {
    const chooseGameOption = Math.floor(Math.random() * gameRules.length);

    setGameQuestion(gameRules[chooseGameOption].question);
    setAllWords(gameRules[chooseGameOption].all_words);
    setGoodWords(gameRules[chooseGameOption].good_words);
  }, []);

  return (
    <div className='game-view'>
      <h2>{gameQuestion}</h2>
      <div className='wordcloud'>
        {allWords.map((word, index) => {
          return <WordContainer word={word} key={index} />;
        })}
      </div>
      <button onClick={handleGameSubmit}>check answers</button>
    </div>
  );
}

export default GameView;
