import apiClient from '../helpers/apiClient';

class UserService {
  getAllCategories = () => apiClient().get('/api_category.php');
  getAllQuestions = (category, difficulty, type, amount) =>
    apiClient().get('/api.php', {
      params: {
        amount,
        category,
        difficulty,
        type,
      },
    });
}
export default new UserService();
