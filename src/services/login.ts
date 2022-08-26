import axios from 'axios';
import { UserCredentials } from 'types';

export const login = (data?: UserCredentials) => {
  return axios.post('/auth/login', { data });
};
