import { createContext, ReactNode, useContext, useState } from 'react';
import { AuthContextType, User } from 'types';

const AuthContext = createContext<AuthContextType | null>(null);

AuthContext.displayName = 'AuthProvider';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const contextValue: AuthContextType = {
    user,
    setUser,
  };

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
