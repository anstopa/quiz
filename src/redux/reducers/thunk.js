import actions from './actions';
import UserService from '../../services/UserService';
export const loadCategoriesAsync = () => (dispatch) => {
  UserService.getAllCategories()
    .then((response) =>
      dispatch(actions.categoriesLoad(response.data.trivia_categories))
    )
    .catch((error) => dispatch(actions.categoriesLoadErrors(error)));
};

export const loadQuestionsAsync =
  (amount, category, difficulty, type) => (dispatch) => {
    UserService.getAllQuestions(amount, category, difficulty, type)
      .then((response) =>
        dispatch(actions.questionsLoad(response.data.results))
      )
      .catch((error) => dispatch(actions.questionsLoadErrors(error)));
  };
