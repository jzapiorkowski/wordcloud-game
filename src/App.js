import './App.css';
import StartView from './components/startView/StartView';
import { useState } from 'react';
import GameView from './components/gameView/GameView';

function App() {
  const [nickname, setNickname] = useState('');
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  return (
    <div className='App'>
      {!currentlyPlaying
        ? !isGameFinished && (
            <StartView
              nickname={nickname}
              setNickname={setNickname}
              setCurrentlyPlaying={setCurrentlyPlaying}
            />
          )
        : !isGameFinished && (
            <GameView
              setGameScore={setGameScore}
              setCurrentlyPlaying={setCurrentlyPlaying}
              setIsGameFinished={setIsGameFinished}
            />
          )}
    </div>
  );
}

export default App;
