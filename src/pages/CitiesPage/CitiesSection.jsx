import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CitiesList from '../../components/common/CitiesList/CitiesList';

const INITIAL_LIMIT = 20;
const LIMIT_STEP = 10;
const CitiesSection = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const increaseLimit = useCallback(() => {
    setLimit(prevLimit => prevLimit + LIMIT_STEP);
  }, []);

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
        <CitiesList
          limit={limit}
          increaseLimit={increaseLimit}
          showLoadMoreButton
        />
      </div>
    </section>
  );
};

export default CitiesSection;
