import { useParams } from 'react-router-dom';
import useCityById from '../../hooks/useCityById';
import { useNavigateToRoute } from '../../hooks/useNavigateToRoute';
import { ROUTES } from '../../App';

const CityPageHeader = () => {
  const { id: cityId } = useParams();
  const { navigateToRoute } = useNavigateToRoute();
  const {
    city,
    isLoading: isCityLoading,
    error: cityError,
  } = useCityById(cityId);

  const cityName = city?.name || cityId;
  const countryName = city?.country?.name || '';
  const cityDescription = city?.description;

  const handleCountryClick = event => {
    event.preventDefault();
    if (countryName) {
      navigateToRoute(ROUTES.cities, countryName);
    }
  };

  return (
    <section className="min-h-28">
      <div className="container mx-auto pt-14">
        <div className="text-dark-color">
          <h2 className="inline-block pr-4 font-third text-4xl">{cityName}</h2>

          <a
            href={`${ROUTES.cities}?query=${countryName}`}
            onClick={handleCountryClick}
            className="inline-block font-primary text-2xl underline transition duration-300 ease-in-out hover:text-orange-color"
          >
            {countryName}
          </a>

          <p className="mt-10 font-fourth text-lg/6">{cityDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default CityPageHeader;
