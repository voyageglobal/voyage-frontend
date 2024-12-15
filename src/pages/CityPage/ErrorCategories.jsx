import { memo } from 'react';
import CategoriesSkeleton from '../../components/common/CategoriesCards/CategoriesSkeleton';

const ErrorCategories = ({ errorMessage }) => {
  return (
    <section className="min-h-96 pt-12">
      <div className="container mx-auto">
        <h3 className="font-fourth text-xl">Select a guide category</h3>
        <CategoriesSkeleton />
        <div className="mt-5 font-fourth text-xl text-red-500">
          <p>Error loading categories: {errorMessage}</p>
        </div>
      </div>
    </section>
  );
};

export default memo(ErrorCategories);
