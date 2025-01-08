import { Link, generatePath } from 'react-router-dom';
import { ROUTES } from '../../App';
import CitiesGrid from '../../components/common/CitiesGrid/CitiesGrid';
import usePopularCities from '../../hooks/usePopularCities';

const GuideMostPopularCitiesSection = () => {
  const { data: cities, isLoading, error } = usePopularCities(49);
  return (
    <section className="min-h-96 pt-12">
      <div className="container mx-auto">
        <h4 className="inline-block font-fourth text-xl font-semibold">
          The most popular cities
        </h4>
        <Link
          className="pl-2 font-fourth underline transition hover:text-orange-color"
          to={generatePath(ROUTES.popularCities)}
        >
          VIEW ALL
        </Link>

        <div className="mt-6 border-b border-t border-dark-color p-4">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error loading cities</p>}
          {!isLoading && !error && <CitiesGrid cities={cities} />}
        </div>
      </div>
    </section>
  );
};
export default GuideMostPopularCitiesSection;
