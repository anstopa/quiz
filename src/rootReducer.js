import Reducers from './redux/reducers/reducer';
import { combineReducers } from 'redux';

const rootReducer = () =>
  combineReducers({
    categories: Reducers.categoriesReducer,
    options: Reducers.optionsReducer,
    questions: Reducers.questionsReducer,
    scoreAndIndex: Reducers.scoreIndexReducer,
  });

export default rootReducer;
