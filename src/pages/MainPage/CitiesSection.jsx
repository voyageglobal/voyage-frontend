import './citiesSection.scss';
import '../../components/common/CityCard/CityCard';
import CityCard from '../../components/common/CityCard/CityCard';

const CitiesSection = () => {
  return (
    <section className="cities">
      <div className="cities-container">
        <h2 className="cities-title">Popular Cities</h2>
        <div className="cities-info">
          <h3 className="cities-subtitle">
            Explore city guides for your next adventure
          </h3>
          <a href="#" className="cities-link-viewAll">
            View all
          </a>
        </div>
        <ul className="cities-cards-wrapper">
          <li>
            <CityCard />
          </li>
          <li>
            <CityCard />
          </li>
          <li>
            <CityCard />
          </li>
          <li>
            <CityCard />
          </li>
          <li>
            <CityCard />
          </li>
          <li>
            <CityCard />
          </li>
          <li>
            <CityCard />
          </li>
          <li>
            <CityCard />
          </li>
          <li>
            <CityCard />
          </li>
          <li>
            <CityCard />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CitiesSection;
