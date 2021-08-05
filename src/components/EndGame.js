import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  optionsTypes,
  questionsTypes,
  scoreAndIndexTypes,
} from '../redux/reducers/actionTypes';

const EndGame = () => {
  const history = useHistory();
  const score = useSelector((state) => state.scoreAndIndex.score);
  const name = useSelector((state) => state.options.name);
  // const questionIndex = useSelector((state) => state.scoreAndIndex.index);
  const dispatch = useDispatch();
  const handleNewGame = () => {
    dispatch({
      type: scoreAndIndexTypes.CLEAR_SCORE_AND_INDEX,
    });
    dispatch({
      type: questionsTypes.QUESTIONS_LOAD,
      payload: [],
    });
    dispatch({
      type: optionsTypes.CLEAR_OPTIONS,
    });

    history.push('/settings');
  };
  const handleResetGame = () => {
    dispatch({
      type: scoreAndIndexTypes.CLEAR_SCORE_AND_INDEX,
    });
    history.push('/questions');
  };
  return (
    <div>
      <p>{name}</p>
      <p>{score}</p>
      <button onClick={handleNewGame}>New Game</button>
      <button onClick={handleResetGame}>Restart</button>
      <button onClick={() => history.push('/rank')}>Player Ranking</button>
    </div>
  );
};
export default EndGame;
