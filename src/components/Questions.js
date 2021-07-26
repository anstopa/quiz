import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { scoreAndIndexTypes } from '../redux/reducers/actionTypes';

const Questions = () => {
  const [answerSelected, setAnswerSelected] = useState(false);
  const [markedAnswer, setMarkedAnswer] = useState();
  const questions = useSelector((state) => state.questions.questions);
  const questionIndex = useSelector((state) => state.scoreAndIndex.index);
  const score = useSelector((state) => state.scoreAndIndex.score);
  const question = questions[questionIndex];
  const answer = question && question.correct_answer;
  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();

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
  }, [question]);
  const handleClickAnswer = (e) => {
    setAnswerSelected(true);
    console.log(answerSelected);
    setMarkedAnswer(e.target.textContent);
    setTimeout(checkCorrectAnswer, 2000);
  };
  const checkCorrectAnswer = () => {
    if (markedAnswer === answer) {
      dispatch({
        type: scoreAndIndexTypes.SET_SCORE,
        payload: score + 1,
      });
    }
    // else if (markedAnswer === answer && !answerSelected) {
    //   dispatch({
    //     type: scoreAndIndexTypes.SET_SCORE,
    //     payload: score - 1,
    //   });
    // }
    // dispatch({
    //   type: scoreAndIndexTypes.SET_INDEX,
    //   payload: questionIndex + 1,
    // });
    // setMarkedAnswer(false);
  };

  const handleNextQuestion = () => {
    dispatch({
      type: scoreAndIndexTypes.SET_INDEX,
      payload: questionIndex + 1,
    });
    console.log(questionIndex, questions.length);
    if (questionIndex + 1 === questions.length) {
      return <div>Gratulacje wygrałeś</div>;
    }
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
          <button onClick={handleNextQuestion}>NEXT</button>
        </div>
      )}
    </>
  );
};
export default Questions;
