import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Theme, ThemeContextType } from 'types';

const ThemeContext = createContext<ThemeContextType | null>(null);

ThemeContext.displayName = 'ThemeProvider';

const getInitialTheme = () => {
  return (localStorage.getItem('theme') as Theme) || 'light';
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = () => {
    setTheme((_theme) => {
      return _theme === 'dark' ? 'light' : 'dark';
    });
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const contextValue = useContext(ThemeContext);
  if (!contextValue) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return contextValue;
};

export { ThemeProvider, useTheme };
