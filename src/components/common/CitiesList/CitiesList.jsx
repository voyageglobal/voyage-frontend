import { useMemo, memo } from 'react';
import CityCard from '../CityCard/CityCard';
import NotFoundSection from '../../../pages/CitiesPage/NotFoundSection';
import CitiesListSkeleton from './CitiesListSkeleton';

const CitiesList = ({
  limit,
  increaseLimit,
  showLoadMoreButton,
  data: cities = [],
  error,
  isLoading,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}) => {
  const defaultLimit = 10;
  const citiesLimit = limit || defaultLimit;
  const displayedCities = useMemo(
    () => cities.slice(0, citiesLimit) || [],
    [cities, citiesLimit],
  );

  if (isLoading) {
    return <CitiesListSkeleton />;
  }

  if (error) {
    return <NotFoundSection />;
  }

  return (
    <>
      <ul className="mt-8 grid list-none gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {displayedCities.map(city => (
          <li key={city.id}>
            <CityCard
              cityName={city.name}
              countryName={city.country}
              image={city.imageUrl}
            />
          </li>
        ))}
      </ul>
      {showLoadMoreButton && hasNextPage && !isFetchingNextPage && (
        <button
          className="mx-auto mt-14 block h-10 w-56 cursor-pointer rounded-10px border-none bg-[rgba(23,23,23,0.82)] text-center font-fourth text-base uppercase text-light-color"
          onClick={increaseLimit}
        >
          LOAD MORE CITIES
        </button>
      )}
    </>
  );
};

export default memo(CitiesList);
