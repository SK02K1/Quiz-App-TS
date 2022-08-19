import './CategoryCard.css';
import { Category } from 'types';

type PropsType = {
  categoryInfo: Category;
};

export const CategoryCard = ({ categoryInfo }: PropsType) => {
  const { category, imgURL } = categoryInfo;
  return (
    <div className='category-card'>
      <div className='overlay'>
        <h2 className='overlay-header m-md-tblr text-2xl'>{category}</h2>
      </div>
      <img className='category-card-img' src={imgURL} alt={category} />
    </div>
  );
};
