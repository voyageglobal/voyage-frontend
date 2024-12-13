import { memo } from 'react';
import CityCard from '../CityCard/CityCard';
import NotFoundSection from '../../../pages/CitiesPage/NotFoundSection';
import CitiesListSkeleton from './CitiesListSkeleton';

const CitiesList = ({ data: cities = [], error, isLoading }) => {
  if (isLoading) {
    return <CitiesListSkeleton />;
  }

  if (error || (cities.length == 0 && !isLoading)) {
    return <NotFoundSection />;
  }

  return (
    <>
      <ul className="mt-8 grid list-none gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {cities.map(city => (
          <li key={city.id}>
            <CityCard
              cityId={city.id}
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
