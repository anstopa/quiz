import {
  categoriesType,
  optionsTypes,
  questionsTypes,
  scoreAndIndexTypes,
} from './actionTypes';

const initialState = {
  categories: {
    categories: '',
    errorMessage: null,
  },

  options: {
    name: '',
    category: '',
    difficulty: '',
    questionType: '',
    amount: 10,
  },
  questions: {
    questions: [],
    errorMessage: null,
  },
  gameScoreAndIndex: {
    index: 0,
    score: 0,
  },
};

const categoriesReducer = (
  state = initialState.categories,
  { type, payload }
) => {
  switch (type) {
    case categoriesType.CATEGORIES_LOAD:
      return {
        ...state,
        categories: payload,
      };
    case categoriesType.CATEGORIES_LOAD_ERRORS:
      return {
        ...state,
        errorMessage: payload,
      };
    default: {
      return state;
    }
  }
};
const optionsReducer = (state = initialState.options, { type, payload }) => {
  switch (type) {
    case optionsTypes.CHANGE_NAME:
      return {
        ...state,
        name: payload,
      };
    case optionsTypes.CHANGE_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case optionsTypes.CHANGE_DIFFICULTY:
      return {
        ...state,
        difficulty: payload,
      };
    case optionsTypes.CHANGE_TYPE:
      return {
        ...state,
        questionType: payload,
      };
    case optionsTypes.CHANGE_AMOUNT:
      return {
        ...state,
        amount: payload,
      };
    default:
      return state;
  }
};
const questionsReducer = (
  state = initialState.questions,
  { type, payload }
) => {
  switch (type) {
    case questionsTypes.QUESTIONS_LOAD:
      return {
        ...state,
        questions: payload,
      };
    case questionsTypes.QUESTIONS_LOAD_ERRORS:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
const scoreIndexReducer = (
  state = initialState.gameScoreAndIndex,
  { type, payload }
) => {
  switch (type) {
    case scoreAndIndexTypes.SET_INDEX:
      return {
        ...state,
        index: payload,
      };
    case scoreAndIndexTypes.SET_SCORE:
      return {
        ...state,
        score: payload,
      };
    default: {
      return state;
    }
  }
};
const Reducers = {
  categoriesReducer,
  optionsReducer,
  questionsReducer,
  scoreIndexReducer,
};
export default Reducers;
