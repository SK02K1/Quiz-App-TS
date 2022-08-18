import axios from 'axios';
import { getAllCategories } from 'services';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getAllCategories service', () => {
  describe('getAllCategories service fulfilled', () => {
    it('should return all the categories', async () => {
      // arrange
      const expectedResponse = {
        data: {
          success: true,
          categories: [
            {
              _id: '1',
              category: 'category-1',
              imgURL: 'https://category-1.com',
            },
            {
              _id: '2',
              category: 'category-2',
              imgURL: 'https://category-2.com',
            },
          ],
        },
      };
      mockedAxios.get.mockResolvedValue(expectedResponse);

      // act
      const response = await getAllCategories();

      // assert
      expect(axios.get).toHaveBeenCalledWith('categories');
      expect(response.data.success).toBe(true);
      expect(response).toEqual(expectedResponse);
    });
  });
  describe('getAllCategories service failed', () => {
    it('should return the message', async () => {
      // arrange
      const expectedResponse = {
        success: false,
        message: 'Failed in getting the categories',
      };
      mockedAxios.get.mockRejectedValue(expectedResponse);

      // act
      const response = getAllCategories();

      // assert
      expect.assertions(1);
      await expect(response).rejects.toEqual(expectedResponse);
    });
  });
});
