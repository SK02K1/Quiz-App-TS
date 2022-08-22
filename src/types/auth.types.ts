export type UserCredentials = {
  username: string;
  email: string;
  password: string;
};

export type User = {
  username: string;
  email: string;
  token: string;
};

export type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
};
