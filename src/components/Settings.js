import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadCategoriesAsync,
  loadQuestionsAsync,
} from '../redux/reducers/thunk';
import { optionsTypes } from '../redux/reducers/actionTypes';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   width: 100%;
//   height: 100%;
// `;
// const StyledButton = styled.button`
//   padding: unset;
// `;

const Settings = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { name, category, difficulty, questionType, amount } = useSelector(
    (state) => state.options
  );
  const history = useHistory();

  useEffect(() => {
    dispatch(loadCategoriesAsync());
  }, []);

  const handleNameChange = (e) => {
    dispatch({
      type: optionsTypes.CHANGE_NAME,
      payload: e.target.value,
    });
  };

  const handleCategoryChange = (e) => {
    dispatch({
      type: optionsTypes.CHANGE_CATEGORY,
      payload: e.target.value,
    });
  };
  const handleDifficultyChange = (e) => {
    dispatch({
      type: optionsTypes.CHANGE_DIFFICULTY,
      payload: e.target.value,
    });
  };
  const handleQuestionTypeChange = (e) => {
    dispatch({
      type: optionsTypes.CHANGE_TYPE,
      payload: e.target.value,
    });
  };
  const handleAmountChange = (e) => {
    dispatch({
      type: optionsTypes.CHANGE_AMOUNT,
      payload: e.target.value,
    });
  };

  const handlePlayGame = (e) => {
    e.preventDefault();
    dispatch(loadQuestionsAsync(category, difficulty, questionType, amount));
    history.push('/questions');
  };

  return (
    <div>
      <form onSubmit={handlePlayGame}>
        <label htmlFor="name">Your Name</label>
        <input
          value={name}
          name="name"
          type="text"
          onChange={handleNameChange}
        />
        <label htmlFor="questionCategory">Choose Category</label>
        <select name="questionCategory" onChange={handleCategoryChange}>
          <option value="">ALL</option>
          {categories &&
            categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
        </select>
        <label htmlFor="questionDifficulty">Choose Difficulty</label>
        <select name="questionDifficulty" onChange={handleDifficultyChange}>
          <option value="">ALL</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label htmlFor="questionType">Choose Type</label>
        <select name="questionType" onChange={handleQuestionTypeChange}>
          <option value="">ALL</option>
          <option value="multiple">Multi Choice</option>
          <option value="boolean">True / False</option>
        </select>
        <label htmlFor="numberOfQuestion">Number of Questions</label>
        <input
          name="numberOfQuestion"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          min="1"
          max="50"
        />

        <button type="submit">Play</button>
      </form>
    </div>
  );
};
export default Settings;
