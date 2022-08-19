import './Home.css';
import { useEffect, useState } from 'react';
import { useCategories } from 'contexts';
import { getAllCategories } from 'services';
import { CategoryCard, Spinner } from 'components';

export const Home = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [error, setError] = useState<null | boolean>(null);
  const { categories, setCategories } = useCategories();

  const categoriesListing = categories?.map((categoryInfo) => {
    return <CategoryCard key={categoryInfo._id} categoryInfo={categoryInfo} />;
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await getAllCategories();
        if (status === 200) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setShowLoader(false);
      }
    })();
  }, [setCategories]);

  return (
    <div>
      <h1 className='text-center text-xl m-md-tb'>Featured Categories</h1>
      <Spinner showLoader={showLoader} />
      {error && (
        <p className='text-center text-base'>
          Failed in getting the categories
        </p>
      )}
      {categories && (
        <div className='grid-container auto'>{categoriesListing}</div>
      )}
    </div>
  );
};
