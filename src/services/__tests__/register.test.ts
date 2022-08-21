import axios from 'axios';
import { register } from 'services';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('register service', () => {
  const data = {
    username: 'sk02k1',
    email: 'ksourabh458@gmail.com',
    password: '1234',
  };

  describe('register service fulfilled', () => {
    it('should return the user data with token', async () => {
      // arrange
      const expectedResponse = {
        data: {
          success: true,
          message: 'User successfully registered',
          user: {
            username: 'sk02k1',
            email: 'ksourabh458@gmail.com',
            token: 'xxxx',
          },
        },
      };

      mockedAxios.post.mockResolvedValue(expectedResponse);

      // act
      const response = await register(data);

      // assert
      expect(axios.post).toHaveBeenCalledWith('auth/register', { data });
      expect(response.data.success).toBe(true);
      expect(response).toEqual(expectedResponse);
    });
  });

  describe('register service failed', () => {
    it('should reject with message when the user is already registered', async () => {
      // arrange
      const expectedResponse = {
        success: false,
        message: 'User already registered',
      };
      mockedAxios.post.mockRejectedValue(expectedResponse);

      // act
      register(data);
      const response = register(data);

      // assert
      expect.assertions(1);
      await expect(response).rejects.toEqual(expectedResponse);
    });
  });
});
