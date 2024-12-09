import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import CategoryCard from '../../components/common/CategoriesCards/CategoryCard';
import CreateGuideButton from '../../components/common/CreateGuideButton/CreateGuideButton';
import GuidesList from '../../components/common/GuidesList/GuidesList';
import Icon from '../../components/common/Icon/Icon';
import CategoriesSkeleton from '../../components/common/CategoriesCards/CategoriesSkeleton';

import useAllGuides from '../../hooks/useAllGuides';
import { fetchCategories } from '../../services/CategoriesService';

import FallbackIcon from '../../utilities/FallbackIcon';
import NoCategory from '../../assets/img/CategoriesCards/NoCategory.png';

const CityPageGuides = () => {
  const [activeKeys, setActiveKeys] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [errorCategories, setErrorCategories] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesData = await fetchCategories();

        const updatedCategories = [
          ...categoriesData,
          {
            key: 'NO_CATEGORY',
            name: 'Clear Categories',
            imageUrl: NoCategory,
            iconName: 'circle-off',
          },
        ];

        setCategories(updatedCategories);
      } catch (error) {
        setErrorCategories(error);
      } finally {
        setLoadingCategories(false);
      }
    };

    getCategories();
  }, []);

  const handleButtonClick = buttonKey => {
    setActiveKeys(prevActiveKeys => {
      if (buttonKey === 'NO_CATEGORY') return [];

      const isActive = prevActiveKeys.includes(buttonKey);
      const updatedKeys = isActive
        ? prevActiveKeys.filter(key => key !== buttonKey)
        : [...prevActiveKeys, buttonKey];

      return updatedKeys.filter(key => key !== 'NO_CATEGORY');
    });
  };

  const {
    data: guides,
    error,
    isLoading,
  } = useAllGuides({
    pageSize: 10,
    sortOrder: 'popular',
    searchQuery: '',
  });

  const filteredGuides = guides.filter(guide => {
    if (activeKeys.length === 0) {
      return true;
    }

    if (activeKeys.includes('NO_CATEGORY')) {
      return !guide.categories || guide.categories.length === 0;
    }

    return guide.categories?.some(category =>
      activeKeys.includes(category.key),
    );
  });

  if (loadingCategories) {
    return (
      <section className="min-h-96 pt-12">
        <div className="container mx-auto">
          <h3 className="font-fourth text-xl">Select a guide category</h3>
          <CategoriesSkeleton />
        </div>
      </section>
    );
  }

  if (errorCategories) {
    return (
      <section className="min-h-96 pt-12">
        <div className="container mx-auto">
          <h3 className="font-fourth text-xl">Select a guide category</h3>
          <CategoriesSkeleton />
          <div className="mt-5 font-fourth text-xl text-red-500">
            <p>Error loading categories: {errorCategories.message}</p>
          </div>
          <GuidesList
            data={filteredGuides}
            error={error}
            isLoading={isLoading}
          />
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="min-h-96 pt-12">
        <div className="container mx-auto">
          <h3 className="font-fourth text-xl">Select a guide category</h3>
          <div className="mt-10 flex justify-between">
            {categories.map(({ key, name, imageUrl, iconName }) => {
              return (
                <CategoryCard
                  key={key}
                  title={name}
                  isActive={activeKeys.includes(key)}
                  onClick={() => handleButtonClick(key)}
                  backgroundImage={imageUrl}
                  icon={
                    <ErrorBoundary FallbackComponent={FallbackIcon}>
                      <Icon name={iconName} size="20px" />
                    </ErrorBoundary>
                  }
                  withAriaPressed={key !== 'NO_CATEGORY'}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="min-h-96 pt-12">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="font-fourth text-dark-color">
              <h3 className="inline-block pr-2.5 text-xl">
                Guides to the city of
              </h3>
              <Link
                className="inline-block text-2xl underline transition duration-300 ease-in-out hover:text-orange-color"
                to="/cities"
              >
                <h2>ROME</h2>
              </Link>
            </div>
            <CreateGuideButton />
          </div>

          <div className="mt-10">
            <GuidesList
              data={filteredGuides}
              error={error}
              isLoading={isLoading}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(CityPageGuides);
