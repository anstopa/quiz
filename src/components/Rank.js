import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Rank = () => {
  const usersRank = useSelector((state) => state.rank.rank);
  const history = useHistory();
  return (
    <div>
      {usersRank.map((user) => (
        <>
          <p>{user.name}</p>
          <p>{user.amount}</p>
          <p>{user.score}</p>
        </>
      ))}
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};
export default Rank;
