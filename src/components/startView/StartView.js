import React, { useState } from 'react';

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
      {displayNoNicknameError && (
        <p className='no-nickname-error'>Set your nickname first!</p>
      )}
      <button onClick={handleClick}>play</button>
    </div>
  );
}

export default StartView;
