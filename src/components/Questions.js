import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  helpersTypes,
  scoreAndIndexTypes,
} from '../redux/reducers/actionTypes';
import { useHistory } from 'react-router-dom';
import actions from '../redux/reducers/actions';

const Questions = () => {
  const answerSelected = useSelector((state) => state.helpers.answerSelected);
  const markedAnswer = useSelector((state) => state.helpers.markedAnswer);
  const questions = useSelector((state) => state.questions.questions);
  const questionIndex = useSelector((state) => state.scoreAndIndex.index);
  const score = useSelector((state) => state.scoreAndIndex.score);
  const { name, amount } = useSelector((state) => state.options);

  const question = questions[questionIndex];
  const answer = question && question.correct_answer;
  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const decodeHTML = function (html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };
  useEffect(() => {
    console.log(answer);
    if (!question) {
      return;
    }
    let incorrectAnswers = [...question.incorrect_answers];
    setAnswers(
      incorrectAnswers.concat(question.correct_answer).sort(() => {
        return Math.random() - 0.5;
      })
    );
  }, [answer, question]);

  const handleClickAnswer = (e) => {
    dispatch({
      type: helpersTypes.SET_ANSWER_SELECTED,
      payload: true,
    });
    dispatch({
      type: helpersTypes.SET_MARKED_ANSWER,
      payload: e.target.textContent,
    });
  };

  const nextQuestion = () => {
    console.log(markedAnswer, answer);
    if (markedAnswer === decodeHTML(answer)) {
      dispatch({
        type: scoreAndIndexTypes.SET_SCORE,
        payload: score + 1,
      });
    }
    const idTimeout = setTimeout(() => {
      dispatch({
        type: scoreAndIndexTypes.SET_INDEX,
        payload: questionIndex + 1,
      });
    }, 2500);
    if (questionIndex + 1 === questions.length) {
      clearTimeout(idTimeout);
      dispatch(actions.addToRank(name, amount, score));
      history.push('/endgame');
    }

    dispatch({
      type: helpersTypes.SET_MARKED_ANSWER,
      payload: null,
    });
    dispatch({
      type: helpersTypes.SET_ANSWER_SELECTED,
      payload: false,
    });
  };
  return (
    <>
      {!question ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p>Question {questionIndex + 1}</p>
          <h1>{decodeHTML(question.question)}</h1>
          <ul>
            {answers.map((answer, i) => (
              <li key={i} onClick={handleClickAnswer}>
                {decodeHTML(answer)}
              </li>
            ))}
          </ul>
          <div>
            Score: {score}/{questions.length}
          </div>
          <button onClick={nextQuestion}>NEXT</button>
        </div>
      )}
    </>
  );
};
export default Questions;
