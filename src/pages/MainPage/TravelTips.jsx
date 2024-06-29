import { Link } from 'react-router-dom';
import BackgroundTravelTips from '../../assets/img/mainPage/travelTips.png';

const TravelTips = () => {
  return (
    <section className="min-h-[27.56rem] pt-16">
      <div
        className="container mx-auto h-96 w-[68.5rem] rounded-lg bg-cover bg-center bg-no-repeat pl-40 pr-40"
        style={{ backgroundImage: `url(${BackgroundTravelTips})` }}
      >
        <div className="flex flex-col items-center justify-between pb-11 pt-32 text-light-color">
          <h2 className="font-third text-4xl text-shadow-header">
            TRAVEL TIPS
          </h2>
          <p className="mt-5 text-center font-fourth text-lg/5">
            Explore our helpful tips for perfect journeys around the world: from
            planning to packing. <br /> Learn how to make the most of your
            adventures and create unforgettable memories.
          </p>
          <Link
            to="/travel-tips"
            className="mt-10 h-12 w-48 rounded-10px border-2 border-light-color bg-transparent pt-3 text-center font-fourth text-base text-light-color"
            aria-label="A button leading to a page with all travel tips."
          >
            GET INSPIRED
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
