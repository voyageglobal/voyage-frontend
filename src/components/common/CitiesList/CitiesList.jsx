import CityCard from '../CityCard/CityCard';
import { memo } from 'react';

const CitiesList = ({ cities, limit = 10 }) => {
  const displayedCities =
    limit && limit <= cities.length ? cities.slice(0, limit) : cities;

  return (
    <ul className="mt-8 flex list-none flex-wrap justify-between gap-x-12 gap-y-8">
      {displayedCities.map(city => (
        <li key={city.key}>
          <CityCard
            cityName={city.cityName}
            countryName={city.countryName}
            image={city.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default memo(CitiesList);
