import axios from 'axios';
import { UserCredentials } from 'types';

export const login = (data?: Partial<UserCredentials>) => {
  return axios.post('auth/login', { data });
};
