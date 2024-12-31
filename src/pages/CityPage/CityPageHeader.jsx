import { Link, useParams, createSearchParams } from 'react-router-dom';
import useCityById from '../../hooks/useCityById';
import { ROUTES } from '../../App';
import { DESTINATION_SEARCH_QUERY } from '../../hooks/useCitySearchQuery';

const CityPageHeader = () => {
  const { id: cityId } = useParams();
  const {
    city,
    isLoading: isCityLoading,
    error: cityError,
  } = useCityById(cityId);

  const cityName = city?.name || cityId;
  const countryName = city?.country?.name || '';
  const cityDescription = city?.description;

  return (
    <section className="min-h-28">
      <div className="container mx-auto pt-14">
        <div className="text-dark-color">
          <h2 className="inline-block pr-4 font-third text-4xl">{cityName}</h2>

          <Link
            to={{
              pathname: ROUTES.cities,
              search: createSearchParams({
                [DESTINATION_SEARCH_QUERY]: [countryName],
              }).toString(),
            }}
            className="inline-block font-primary text-2xl underline transition duration-300 ease-in-out hover:text-orange-color"
          >
            {countryName}
          </Link>

          <p className="mt-10 font-fourth text-lg/6">{cityDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default CityPageHeader;
