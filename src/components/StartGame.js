import React from 'react';
import { useHistory } from 'react-router-dom';

const StartGame = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push('/settings')}>Start Game</button>
      <button onClick={() => history.push('/rank')}>Rank</button>
    </div>
  );
};
export default StartGame;
