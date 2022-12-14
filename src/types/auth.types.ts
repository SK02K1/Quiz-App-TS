export type UserCredentials = {
  name: string;
  email: string;
  password: string;
};

export type FormFieldType = {
  [key: string]: string;
};

export type User = {
  name: string;
  email: string;
  token: string;
};

export type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
