import React, { useEffect, useState } from 'react';
import WordContainer from '../wordContainer/WordContainer';
import gameRules from './GameRules.json';

function GameView({ setGameScore, setCurrentlyPlaying, setIsGameFinished }) {
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [gameQuestion, setGameQuestion] = useState('');
  const [allWords, setAllWords] = useState([]);
  const [goodWords, setGoodWords] = useState([]);
  const [correctWordsCount, setCorrectWordsCount] = useState(0);
  const [incorrectWordsCount, setIncorrectWordsCount] = useState(0);

  useEffect(() => {
    const chooseGameOption = Math.floor(Math.random() * gameRules.length);

    setGameQuestion(gameRules[chooseGameOption].question);
    setAllWords(gameRules[chooseGameOption].all_words);
    setGoodWords(gameRules[chooseGameOption].good_words);
  }, []);

  const handleGameSubmit = () => {
    setCheckAnswers(true);
  };

  const handleFinishGame = () => {
    setGameScore(
      correctWordsCount * 2 -
        (incorrectWordsCount + goodWords.length - correctWordsCount)
    );
    setIsGameFinished(true);
    setCurrentlyPlaying(false);
  };

  const isWordChosenCorrectly = (word) => {
    return goodWords.includes(word) ? true : false;
  };

  return (
    <div className='game-view'>
      <h2>{gameQuestion}</h2>
      <div className='wordcloud'>
        {allWords.map((word, index) => {
          return (
            <WordContainer
              word={word}
              key={index}
              showAnswers={checkAnswers}
              isCorrectAnswer={isWordChosenCorrectly}
              setCorrectWordsCount={setCorrectWordsCount}
              correctWordsCount={correctWordsCount}
              setIncorrectWordsCount={setIncorrectWordsCount}
              incorrectWordsCount={incorrectWordsCount}
            />
          );
        })}
      </div>
      {!checkAnswers ? (
        <button onClick={handleGameSubmit}>check answers</button>
      ) : (
        <button onClick={handleFinishGame}>finish game</button>
      )}
    </div>
  );
}

export default GameView;
