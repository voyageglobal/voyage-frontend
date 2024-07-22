import { useMemo, memo } from 'react';
import CityCard from '../CityCard/CityCard';
import NotFoundSection from '../../../pages/CitiesPage/NotFoundSection';
import CitiesListSkeleton from './CitiesListSkeleton';

const CitiesList = ({ limit, data: cities = [], error, isLoading }) => {
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
    </>
  );
};

export default memo(CitiesList);
