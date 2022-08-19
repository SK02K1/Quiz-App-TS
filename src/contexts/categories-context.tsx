import { createContext, ReactNode, useContext, useState } from 'react';
import { CategoriesContextType, Category } from 'types';

const CategoriesContext = createContext<CategoriesContextType | null>(null);

CategoriesContext.displayName = 'CategoriesProvider';

const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[] | null>(null);

  const contextValue: CategoriesContextType = {
    categories,
    setCategories,
  };

  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategories = () => {
  const contextValue = useContext(CategoriesContext);
  if (!contextValue) {
    throw new Error('useCount must be used within a CategoriesProvider');
  }
  return contextValue;
};

export { CategoriesProvider, useCategories };
