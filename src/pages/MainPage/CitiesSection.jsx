import CityCard from '../../components/common/CityCard/CityCard';
import Paris from '../../assets/img/cities/Paris.png';
import Prague from '../../assets/img/cities/Prague.png';
import NewYork from '../../assets/img/cities/NewYork.png';
import Rome from '../../assets/img/cities/Rome.png';
import TelAviv from '../../assets/img/cities/TelAviv.png';
import Berlin from '../../assets/img/cities/Berlin.png';
import Vilnius from '../../assets/img/cities/Vilnius.png';
import Warsaw from '../../assets/img/cities/Warsaw.png';
import Madrid from '../../assets/img/cities/Madrid.png';
import London from '../../assets/img/cities/London.png';

const CitiesSection = () => {
  const cities = [
    {
      key: 1,
      cityName: 'Paris',
      countryName: 'France',
      image: Paris,
    },
    {
      key: 2,
      cityName: 'Prague',
      countryName: 'Czech Republic',
      image: Prague,
    },
    {
      key: 3,
      cityName: 'New York',
      countryName: 'USA',
      image: NewYork,
    },
    {
      key: 4,
      cityName: 'Rome',
      countryName: 'Italy',
      image: Rome,
    },
    {
      key: 5,
      cityName: 'Tel Aviv',
      countryName: 'Israel',
      image: TelAviv,
    },
    {
      key: 6,
      cityName: 'Berlin',
      countryName: 'Germany',
      image: Berlin,
    },
    {
      key: 7,
      cityName: 'Vilnius',
      countryName: 'Lithuania ',
      image: Vilnius,
    },
    {
      key: 8,
      cityName: 'Warsaw',
      countryName: 'Poland',
      image: Warsaw,
    },
    {
      key: 9,
      cityName: 'Madrid',
      countryName: 'Spain',
      image: Madrid,
    },
    {
      key: 10,
      cityName: 'London',
      countryName: 'UK',
      image: London,
    },
  ];

  return (
    <section className="min-h-[48.13rem] pt-28">
      <div className="container mx-auto">
        <h2 className="font-fourth text-2rem font-normal">Popular Cities</h2>
        <div className="mt-6 flex items-center justify-between">
          <h3 className="font-fourth text-xl font-normal">
            Explore city guides for your next adventure
          </h3>
          <a
            href="#"
            className="inline-block h-8 w-20 rounded-10px border border-dark-color text-center font-fourth text-lg/8 font-normal text-dark-color"
          >
            View all
          </a>
        </div>
        <ul className="mt-8 flex list-none flex-wrap justify-between gap-x-12 gap-y-8">
          {cities.map(city => (
            <li key={city.key}>
              <CityCard
                cityName={city.cityName}
                countryName={city.countryName}
                image={city.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CitiesSection;
