import axios from 'axios';

export const getQuizzesByCategoryId = (categoryId: string) => {
  return axios.get(`quizzes/${categoryId}`);
};
