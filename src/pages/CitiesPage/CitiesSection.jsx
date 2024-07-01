import { useState } from 'react';
import { Link } from 'react-router-dom';
import CitiesList from '../../components/common/CitiesList/CitiesList';
import { cities } from '../../components/common/CitiesData/CitiesData';

const CitiesSection = () => {
  const [limit, setLimit] = useState(20);

  const loadMoreCities = () => {
    setLimit(prevLimit => prevLimit + 10);
  };
  const allCitiesDisplayed = limit >= cities.length;

  return (
    <section className="min-h-[48.13rem] pb-14 pt-28">
      <div className="container mx-auto">
        <h2 className="font-fourth text-2rem font-normal">City Guides</h2>
        <div className="mt-6 flex items-center justify-between">
          <h3 className="font-fourth text-xl font-normal">
            Explore city guides for your next adventure
          </h3>
          <Link
            to="/create-guide"
            className="inline-block h-8 w-56 rounded-10px bg-orange-color text-center font-fourth text-base/8 text-light-color"
          >
            CREATE GUIDE
          </Link>
        </div>
        <CitiesList cities={cities} limit={limit} />
        {!allCitiesDisplayed && (
          <button
            className="mx-auto mt-14 block h-10 w-44 cursor-pointer rounded-10px border-none bg-[rgba(23,23,23,0.82)] text-center font-fourth text-base uppercase text-light-color"
            onClick={loadMoreCities}
          >
            LOAD MORE CITIES
          </button>
        )}
      </div>
    </section>
  );
};

export default CitiesSection;
