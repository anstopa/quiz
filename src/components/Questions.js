import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
  helpersTypes,
  scoreAndIndexTypes,
} from '../redux/reducers/actionTypes';
import { useHistory } from 'react-router-dom';
import actions from '../redux/reducers/actions';
import configureStore from '../redux/store/configureStore';
import { render } from 'react-dom';
import styled from 'styled-components';

const Questions = () => {
  const answerSelected = useSelector((state) => state.helpers.answerSelected);
  const markedAnswer = useSelector((state) => state.helpers.markedAnswer);
  const questions = useSelector((state) => state.questions.questions);
  const questionIndex = useSelector((state) => state.scoreAndIndex.index);
  const score = useSelector((state) => state.scoreAndIndex.score);
  const { name, amount } = useSelector((state) => state.options);
  const store = useStore();

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

  const addClass = (option) => {
    if (!answerSelected) {
      return '';
    }
    if (option === answer) {
      return 'correct';
    }
    if (option === markedAnswer) {
      return 'selected';
    }
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

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100vh;
    align-items: center;
  `;

  const StyledQuestion = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 5vh;
    width: 90%;
    text-align: center;
    border-radius: 10px;
    padding: 5px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin-bottom: 60px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.2);

    p {
      text-decoration: underline;
    }
    h1 {
      font-size: 1.5rem;
      margin-top: 10px;
    }
  `;

  const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `;

  const StyledLi = styled.li`
    display: flex;
    justify-content: center;
    width: 90%;

    border-radius: 10px;
    padding: 5px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin-bottom: 40px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
    :hover {
      background: rgba(255, 255, 255, 0.5);
    }
  `;

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
      console.log('poprawna odpowiedz');
      dispatch({
        type: scoreAndIndexTypes.SET_SCORE,
        payload: score + 1,
      });
      console.log(score);
    }

    const idTimeout = setTimeout(() => {
      dispatch({
        type: scoreAndIndexTypes.SET_INDEX,
        payload: questionIndex + 1,
      });
      const newState = store.getState();
      const newScore = newState.scoreAndIndex.score;
      console.log(newScore);
      if (questionIndex + 1 === questions.length) {
        clearTimeout(idTimeout);
        console.log(score);
        dispatch(actions.addToRank(name, amount, newScore));
        history.push('/endgame');
      }
    }, 3500);

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
      <Wrapper>
        {!question ? (
          <div>Loading...</div>
        ) : (
          <>
            <StyledQuestion>
              <p>Question {questionIndex + 1}</p>
              <h1>{decodeHTML(question.question)}</h1>
            </StyledQuestion>
            <>
              <StyledUl>
                {answers.map((answer, i) => (
                  <StyledLi
                    key={i}
                    onClick={handleClickAnswer}
                    className={addClass(answer)}
                  >
                    {decodeHTML(answer)}
                  </StyledLi>
                ))}
              </StyledUl>
            </>
            <div>
              Score: {score}/{questions.length}
            </div>
            <button onClick={nextQuestion}>NEXT</button>
          </>
        )}
      </Wrapper>
    </>
  );
};
export default Questions;
