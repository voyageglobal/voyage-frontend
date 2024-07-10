import CityCard from '../CityCard/CityCard';
import { memo } from 'react';
import usePopularCities from '../../../hooks/usePopularCities';

const CitiesList = ({ limit, increaseLimit, showLoadMoreButton }) => {
  const { data: cities, error, isLoading } = usePopularCities();

  const defaultLimit = 10;
  const citiesLimit = limit || defaultLimit;
  const displayedCities = cities?.slice(0, citiesLimit) || [];
  const allCitiesDisplayed = citiesLimit >= (cities?.length || 0);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading cities: {error.message}</p>;
  }

  return (
    <>
      <ul className="mt-8 flex list-none flex-wrap justify-between gap-x-12 gap-y-8">
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
