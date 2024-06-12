import SearchPannel from '../../components/common/SearchPannel/SearchPannel';
import BackgroundHero from '../../assets/img/mainPage/hero.png';
import './heroSection.scss';

const HeroSection = () => {
  return (
    <section
      className="... min-h-[40.75rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundHero})` }}
    >
      <div className="container mx-auto my-0 flex justify-end pt-24">
        <div className="relative flex max-w-[40rem] flex-col">
          <h1 className="font-third mb-40 self-end text-right text-5xl font-normal not-italic text-light-color">
            Discover and share travel guides from around the world
          </h1>
          <div className="absolute right-14 top-2/3 translate-y-[-50%]">
            <SearchPannel />
          </div>
          <p className="font-fourth h-16 w-80 text-center text-xl/6 font-normal not-italic text-light-color">
            Explore new cities and find hidden gems with our community of
            travelers
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
