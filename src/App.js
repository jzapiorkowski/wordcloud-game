import './App.css';
import StartView from './components/startView/StartView';
import { useState } from 'react';
import GameView from './components/gameView/GameView';

function App() {
  const [nickname, setNickname] = useState('');
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  return (
    <div className='App'>
      {!currentlyPlaying && (
        <StartView
          nickname={nickname}
          setNickname={setNickname}
          setCurrentlyPlaying={setCurrentlyPlaying}
        />
      )}
      {currentlyPlaying && (
        <GameView
          setGameScore={setGameScore}
          setCurrentlyPlaying={setCurrentlyPlaying}
        />
      )}
    </div>
  );
}

export default App;
