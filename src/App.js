import './App.css';
import StartView from './components/startView/StartView';
import { useState } from 'react';

function App() {
  const [nickname, setNickname] = useState('');
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);

  return (
    <div className='App'>
      {!currentlyPlaying && (
        <StartView
          nickname={nickname}
          setNickname={setNickname}
          setCurrentlyPlaying={setCurrentlyPlaying}
        />
      )}
    </div>
  );
}

export default App;
