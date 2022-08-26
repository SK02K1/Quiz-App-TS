import axios from 'axios';
import { login } from 'services';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('login service', () => {
  describe('login service fulfilled', () => {
    it('should return the user data with token', async () => {
      // arrange
      const data = {
        email: 'test@test.com',
        password: 'test',
      };

      const expectedResponse = {
        data: {
          success: true,
          user: {
            name: 'test',
            email: 'test@test.com',
            token: 'xxxx',
          },
        },
      };

      mockedAxios.post.mockResolvedValue(expectedResponse);

      // act
      const response = await login(data);

      // assert
      expect(axios.post).toHaveBeenCalledWith('auth/login', { data });
      expect(response.data.success).toBe(true);
      expect(response).toEqual(expectedResponse);
    });
  });

  describe('login service failed', () => {
    it('should reject with message when user is not registered', async () => {
      // arrange
      const data = {
        email: 'test@notregistered.com',
        password: 'test',
      };

      const expectedResponse = {
        data: {
          success: false,
          message: 'User not registered, check email address',
        },
      };

      mockedAxios.post.mockRejectedValue(expectedResponse);

      // act
      const response = login(data);

      // assert
      expect.assertions(1);
      await expect(response).rejects.toEqual(expectedResponse);
    });

    it('should reject with message when the password is wrong', async () => {
      // arrange
      const data = {
        email: 'test@test.com',
        password: 'wrongpassword',
      };

      const expectedResponse = {
        data: {
          success: false,
          message: 'Wrong password',
        },
      };

      mockedAxios.post.mockRejectedValue(expectedResponse);

      // act
      const response = login(data);

      // assert
      expect.assertions(1);
      await expect(response).rejects.toEqual(expectedResponse);
    });
  });
});
