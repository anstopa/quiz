import Reducers from './redux/reducers/reducer';
import { combineReducers } from 'redux';

const rootReducer = () =>
  combineReducers({
    categories: Reducers.categoriesReducer,
    options: Reducers.optionsReducer,
    questions: Reducers.questionsReducer,
    scoreAndIndex: Reducers.scoreIndexReducer,
    helpers: Reducers.helpersReducer,
    rank: Reducers.rankReducer,
  });

export default rootReducer;
