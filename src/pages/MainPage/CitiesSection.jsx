import { Link } from 'react-router-dom';
import CitiesList from '../../components/common/CitiesList/CitiesList';
import { cities } from '../сitiesData';

const CitiesSection = () => {
  return (
    <section className="min-h-[48.13rem] pt-24">
      <div className="container mx-auto">
        <h2 className="font-fourth text-2rem font-normal">Popular Cities</h2>
        <div className="mt-6 flex items-center justify-between">
          <h3 className="font-fourth text-xl font-normal">
            Explore city guides for your next adventure
          </h3>
          <Link
            to="/cities"
            className="inline-block h-8 w-20 rounded-10px border border-dark-color text-center font-fourth text-lg/8 font-normal text-dark-color"
          >
            View all
          </Link>
        </div>
        <CitiesList cities={cities} />
      </div>
    </section>
  );
};

export default CitiesSection;
