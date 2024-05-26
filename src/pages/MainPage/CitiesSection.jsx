import './citiesSection.scss';
import '../../components/common/CityCard/CityCard';
import CityCard from '../../components/common/CityCard/CityCard';

const CitiesSection = () => {
  return (
    <section className="cities">
      <div className="cities-wrapper">
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </div>
    </section>
  );
};

export default CitiesSection;
