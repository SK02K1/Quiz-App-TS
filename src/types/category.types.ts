export type Category = {
  _id: string;
  category: string;
  imgURL: string;
};

export type CategoriesContextType = {
  categories: Category[] | null;
  setCategories: (categories: Category[]) => void;
};
