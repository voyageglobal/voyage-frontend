import CategoriesSkeleton from '../../components/common/CategoriesCards/CategoriesSkeleton';
import GuidesList from '../../components/common/GuidesList/GuidesList';

const ErrorCategories = ({
  errorMessage,
  filteredGuides,
  error,
  isLoading,
}) => {
  return (
    <section className="min-h-96 pt-12">
      <div className="container mx-auto">
        <h3 className="font-fourth text-xl">Select a guide category</h3>
        <CategoriesSkeleton />
        <div className="mt-5 font-fourth text-xl text-red-500">
          <p>Error loading categories: {errorMessage}</p>
        </div>
        <GuidesList data={filteredGuides} error={error} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default ErrorCategories;
