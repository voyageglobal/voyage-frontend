import { memo } from 'react';
import { Link } from 'react-router-dom';
import BackgroundOurGuides from '../../assets/img/mainPage/map.png';
import { ROUTES } from '../../App';

const OurGuidesSection = ({ totalGuides, totalCountries }) => {
  return (
    <section className="min-h-[35.19rem] pt-24">
      <div
        className="container mx-auto h-[35.19rem] w-[73rem] rounded-10px bg-cover bg-center bg-no-repeat px-0"
        style={{ backgroundImage: `url(${BackgroundOurGuides})` }}
      >
        <div className="flex h-[29.88rem] w-96 flex-col justify-between pl-24 pt-40">
          <h2 className="font-third text-5xl text-shadow-header">OUR GUIDES</h2>
          <p className="font-fourth text-xl/6">
            Today there are <b>{totalGuides || '...'}</b> guides in <br />
            <b>{totalCountries || '...'}</b> countries in our community! <br />{' '}
            Discover new cities and countries, or share your guide right now!
          </p>
          <Link
            to={ROUTES.cities}
            className="h-12 w-52 rounded-10px bg-orange-color pt-3 text-center font-fourth text-lg text-white"
            aria-label="A button leading to a page with all the guides."
          >
            BON VOYAGE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(OurGuidesSection);
