import { categoriesType, questionsTypes, rankTypes } from './actionTypes';

const categoriesLoad = (categories) => ({
  type: categoriesType.CATEGORIES_LOAD,
  payload: categories,
});

const categoriesLoadErrors = (errorMessage) => ({
  type: categoriesType.CATEGORIES_LOAD_ERRORS,
  payload: errorMessage,
});

const questionsLoad = (questions) => ({
  type: questionsTypes.QUESTIONS_LOAD,
  payload: questions,
});
const questionsLoadErrors = (errorMessage) => ({
  type: questionsTypes.QUESTIONS_LOAD_ERRORS,
  payload: errorMessage,
});
const addToRank = (name, amount, score) => ({
  type: rankTypes.ADD_TO_RANK,
  name,
  amount,
  score,
});
const Actions = {
  categoriesLoad,
  categoriesLoadErrors,
  questionsLoad,
  questionsLoadErrors,
  addToRank,
};

export default Actions;
