import CategoriesSkeleton from '../../components/common/CategoriesCards/CategoriesSkeleton';

const LoadingCategories = () => {
  return (
    <section className="min-h-96 pt-12">
      <div className="container mx-auto">
        <h3 className="font-fourth text-xl">Select a guide category</h3>
        <CategoriesSkeleton />
      </div>
    </section>
  );
};

export default LoadingCategories;
