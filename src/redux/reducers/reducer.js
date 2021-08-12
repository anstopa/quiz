import {
  categoriesType,
  helpersTypes,
  optionsTypes,
  questionsTypes,
  rankTypes,
  scoreAndIndexTypes,
} from './actionTypes';

export const initialState = {
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
  helpers: {
    markedAnswer: null,
    answerSelected: false,
  },
  rank: {
    rank: [],
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
    case optionsTypes.CLEAR_OPTIONS:
      return {
        name: '',
        category: '',
        difficulty: '',
        questionType: '',
        amount: 10,
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
    case scoreAndIndexTypes.CLEAR_SCORE_AND_INDEX:
      return {
        index: 0,
        score: 0,
      };
    default: {
      return state;
    }
  }
};
const helpersReducer = (state = initialState.helpers, { type, payload }) => {
  switch (type) {
    case helpersTypes.SET_MARKED_ANSWER:
      return {
        ...state,
        markedAnswer: payload,
      };
    case helpersTypes.SET_ANSWER_SELECTED:
      return {
        ...state,
        answerSelected: payload,
      };
    default: {
      return state;
    }
  }
};
const rankReducer = (
  state = initialState.rank,
  { type, name, amount, score }
) => {
  switch (type) {
    case rankTypes.ADD_TO_RANK: {
      return {
        ...state,
        rank: [...state.rank, { name, amount, score }],
      };
    }
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
  helpersReducer,
  rankReducer,
};
export default Reducers;
