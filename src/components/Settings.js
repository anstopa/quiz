import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadCategoriesAsync,
  loadQuestionsAsync,
} from '../redux/reducers/thunk';
import { optionsTypes } from '../redux/reducers/actionTypes';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledLabel = styled.label`
  position: relative;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 5px;
  margin-bottom: 10px;
  text-shadow: 1px 2px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  width: 80%;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  padding: 10px 20px;
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0, 05);
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  :hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
const StyledSelect = styled.select`
  width: 80%;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  padding: 10px 20px;
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 1rem;
  letter-spacing: 1px;
  color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0, 05);
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  :hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const StyledOption = styled.option`
  color: black;
  font-size: 0.8rem;
  background: rgba(255, 255, 255, 0.2);
`;
const StyledButton = styled.button`
  display: flex;
  position: relative;
  width: 80%;
  border-radius: 35px;
  padding: 5px;
  margin-top: 20px;
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
  justify-content: center;
  :hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

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
    <Wrapper>
      <StyledForm onSubmit={handlePlayGame}>
        <StyledLabel htmlFor="name">Your Name</StyledLabel>
        <StyledInput
          value={name}
          name="name"
          type="text"
          onChange={handleNameChange}
        />
        <StyledLabel htmlFor="questionCategory">Choose Category</StyledLabel>
        <StyledSelect name="questionCategory" onChange={handleCategoryChange}>
          <optiStyledOptionon value="">ALL</optiStyledOptionon>
          {categories &&
            categories.map((category) => (
              <StyledOption value={category.id} key={category.id}>
                {category.name}
              </StyledOption>
            ))}
        </StyledSelect>
        <StyledLabel htmlFor="questionDifficulty">
          Choose Difficulty
        </StyledLabel>
        <StyledSelect
          name="questionDifficulty"
          onChange={handleDifficultyChange}
        >
          <StyledOption value="">ALL</StyledOption>
          <StyledOption value="easy">Easy</StyledOption>
          <StyledOption value="medium">Medium</StyledOption>
          <StyledOption value="hard">Hard</StyledOption>
        </StyledSelect>
        <StyledLabel htmlFor="questionType">Choose Type</StyledLabel>
        <StyledSelect name="questionType" onChange={handleQuestionTypeChange}>
          <StyledOption value="">ALL</StyledOption>
          <StyledOption value="multiple">Multi Choice</StyledOption>
          <StyledOption value="boolean">True / False</StyledOption>
        </StyledSelect>
        <StyledLabel htmlFor="numberOfQuestion">
          Number of Questions
        </StyledLabel>
        <StyledInput
          name="numberOfQuestion"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          min="1"
          max="50"
        />

        <StyledButton type="submit">Play</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};
export default Settings;
