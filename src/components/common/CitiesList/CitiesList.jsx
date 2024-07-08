import CityCard from '../CityCard/CityCard';
import { memo } from 'react';

const CitiesList = ({ cities, limit, increaseLimit, showLoadMoreButton }) => {
  const defaultLimit = 10;
  const citiesLimit = limit || defaultLimit;
  const displayedCities = cities.slice(0, citiesLimit);
  const allCitiesDisplayed = citiesLimit >= cities.length;

  return (
    <>
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
      {showLoadMoreButton && !allCitiesDisplayed && (
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
