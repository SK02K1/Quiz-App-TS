import axios from 'axios';
import { getQuizzesByCategoryId } from 'services';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getQuizzesByCategoryId service', () => {
  const categoryId = 'xxxxxxxxxxxxxxxxxxxxxxxx';

  describe('getQuizzesByCategoryId service fulfilled', () => {
    it('should return quizzes based of categoryId', async () => {
      // arrange
      const expectedResponse = {
        data: {
          success: true,
          quizzes: [
            {
              _id: 'xxxxxxxxxxxxxxxxxxxxxxxx',
              title: 'quiz-title',
              quizDescription: 'quiz-description',
              quizBanner: 'https://quiz-banner.com',
              questions: [
                {
                  questionId: 'xxxxxxxxxxxxxxxxxxxxxxxx',
                  question: 'question',
                  options: [
                    {
                      optionId: 'xxxxxxxxxxxxxxxxxxxxxxxx',
                      option: 'option',
                    },
                  ],
                  answer: 'answer',
                },
              ],
            },
          ],
        },
      };
      mockedAxios.get.mockResolvedValue(expectedResponse);

      // act
      const response = await getQuizzesByCategoryId(categoryId);

      // assert
      expect(axios.get).toHaveBeenCalledWith(`quizzes/${categoryId}`);
      expect(response.data.success).toBe(true);
      expect(response).toEqual(expectedResponse);
    });
  });

  describe('getQuizzesByCategoryId service failed', () => {
    it('should return the message', async () => {
      // arrange
      const expectedResponse = {
        success: false,
        message: 'Failed in getting the quizzes by given categoryId',
      };
      mockedAxios.get.mockRejectedValue(expectedResponse);

      // act
      const response = getQuizzesByCategoryId(categoryId);

      // assert
      expect.assertions(1);
      await expect(response).rejects.toEqual(expectedResponse);
    });
  });
});
