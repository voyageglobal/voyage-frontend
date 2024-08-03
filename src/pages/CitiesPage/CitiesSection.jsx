import { Link } from 'react-router-dom';
import { useCitySearch } from '../../context/CitySearchContext';
import { useCitiesData } from '../../context/CitiesDataContext';
import AllCitiesList from '../../components/features/AllCitiesList';

const CitiesSection = () => {
  const { searchQuery } = useCitySearch();
  const { citiesData, isDataLoaded } = useCitiesData();

  const displayText = searchQuery
    ? `City Guides: ${searchQuery}`
    : 'City Guides';
  const showCreateGuideButton = isDataLoaded && citiesData.length > 0;

  return (
    <section className="min-h-[48.13rem] pb-14 pt-28">
      <div className="container mx-auto">
        <h2 className="font-fourth text-2rem font-normal underline">
          {displayText}
        </h2>
        <div className="mt-6 flex items-center justify-between">
          <h3 className="font-fourth text-xl font-normal">
            Explore city guides for your next adventure
          </h3>
          {showCreateGuideButton && (
            <Link
              to="/create-guide"
              className="inline-block h-8 w-56 rounded-10px bg-orange-color text-center font-fourth text-base/8 text-light-color"
            >
              CREATE GUIDE
            </Link>
          )}
        </div>
        <AllCitiesList initialLimit={10} />
      </div>
    </section>
  );
};

export default CitiesSection;
