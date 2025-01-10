import { useState, useMemo, useCallback, memo } from 'react';
import { Link, useParams, generatePath } from 'react-router-dom';

import CategoryCard from '../../components/common/CategoriesCards/CategoryCard';
import CreateGuideButton from '../../components/common/CreateGuideButton/CreateGuideButton';
import GuidesList from '../../components/common/GuidesList/GuidesList';
import DynamicIcon from '../../components/common/DynamicIcon/DynamicIcon';
import { NO_CATEGORY_BUTTON } from '../../hooks/useAllCategories';

import useAllGuides from '../../hooks/useAllGuides';
import useAllCategories from '../../hooks/useAllCategories';
import useCityById from '../../hooks/useCityById';

import LoadingCategories from './LoadingCategories';
import ErrorCategories from './ErrorCategories';
import { ROUTES } from '../../App';

const CityPageGuides = () => {
  const { id: cityId } = useParams();
  const [activeKeys, setActiveKeys] = useState([]);

  const { city } = useCityById(cityId);

  const {
    data: categories = [],
    isLoading: loadingCategories,
    error: errorCategories,
  } = useAllCategories();

  const handleButtonClick = useCallback(buttonKey => {
    setActiveKeys(prevActiveKeys => {
      if (buttonKey === NO_CATEGORY_BUTTON.key) return [];

      const isActive = prevActiveKeys.includes(buttonKey);
      const updatedKeys = isActive
        ? prevActiveKeys.filter(key => key !== buttonKey)
        : [...prevActiveKeys, buttonKey];

      return updatedKeys.filter(key => key !== NO_CATEGORY_BUTTON.key);
    });
  }, []);

  const guideCategories = useMemo(() => activeKeys.join(','), [activeKeys]);

  const {
    data: guides = [],
    error,
    isLoading,
  } = useAllGuides({
    pageSize: 10,
    sortOrder: 'popular',
    searchQuery: '',
    cityId,
    guideCategories,
  });

  if (loadingCategories) {
    return <LoadingCategories />;
  }

  if (errorCategories) {
    return (
      <ErrorCategories errorMessage={errorCategories.message} error={error} />
    );
  }

  const cityName = city?.name || cityId;

  return (
    <>
      <section className="min-h-96 pt-12">
        <div className="container mx-auto">
          <h3 className="font-fourth text-xl">Select a guide category</h3>
          <div className="mt-10 flex justify-between">
            {categories.map(({ key, name, imageUrl, iconName }) => (
              <CategoryCard
                key={key}
                categoryKey={key}
                title={name}
                isActive={activeKeys.includes(key)}
                onClick={() => handleButtonClick(key)}
                backgroundImage={imageUrl}
                icon={<DynamicIcon name={iconName} size="20px" />}
                withAriaPressed={key !== NO_CATEGORY_BUTTON.key}
              />
            ))}
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
                to={generatePath(ROUTES.city, { id: cityId })}
              >
                {cityName}
              </Link>
            </div>
            <CreateGuideButton />
          </div>

          <div className="mt-10">
            <GuidesList data={guides} error={error} isLoading={isLoading} />
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(CityPageGuides);
