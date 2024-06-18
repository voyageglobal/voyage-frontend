import { memo } from 'react';
import BackgroundOurGuides from '../../assets/img/mainPage/map.png';

const OurGuidesSection = ({ guidesCount = 53, countriesCount = 21 }) => {
  return (
    <section className="min-h-[35.19rem] pb-28 pt-24">
      <div
        className="container mx-auto h-[35.19rem] w-[73rem] rounded-10px bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundOurGuides})` }}
      >
        <div className="flex h-[29.88rem] w-96 flex-col justify-between pl-20 pt-40">
          <h2 className="text-shadow-header font-third text-5xl">OUR GUIDES</h2>
          <p className="font-fourth text-xl/6">
            Today there are <b>{guidesCount}</b> guides in <br />
            <b>{countriesCount}</b> countries in our community! <br /> Discover
            new cities and countries, or share your guide right now!
          </p>
          <button
            className="bg-orange-color h-12 w-52 rounded-10px text-center font-fourth text-lg text-white"
            aria-label="A button leading to a page with all the guides."
          >
            BON VOYAGE
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(OurGuidesSection);
