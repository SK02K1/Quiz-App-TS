import axios from 'axios';
import { UserCredentials } from 'types';

export const register = (data: UserCredentials) => {
  return axios.post('auth/register', { data });
};
