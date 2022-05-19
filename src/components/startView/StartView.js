import React, { useState } from 'react';
import './startView.scss';

function StartView({ nickname, setNickname, setCurrentlyPlaying }) {
  const [displayNoNicknameError, setDisplayNoNicknameError] = useState(false);

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  const handleClick = () => {
    if (nickname !== '') {
      setDisplayNoNicknameError(false);
      setCurrentlyPlaying(true);
    } else {
      setDisplayNoNicknameError(true);
    }
  };

  return (
    <div className='start-view'>
      <h1 className='title'>Wordcloud game</h1>
      <input
        type='text'
        value={nickname}
        placeholder='Enter your nickname here...'
        onChange={handleChange}
      ></input>

      <button onClick={handleClick}>play</button>
      {displayNoNicknameError && (
        <p className='no-nickname-error'>Set your nickname first!</p>
      )}
    </div>
  );
}

export default StartView;
