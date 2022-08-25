import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AuthContextType, User } from 'types';

const AuthContext = createContext<AuthContextType | null>(null);

AuthContext.displayName = 'AuthProvider';

const getInitialUser = (): User | null => {
  let user: string | null | User = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
    return user as User;
  }
  return null;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(getInitialUser);

  const contextValue: AuthContextType = {
    user,
    setUser,
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const contextValue = useContext(AuthContext);
  if (!contextValue) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return contextValue;
};

export { AuthProvider, useAuth };
