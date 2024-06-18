import SearchPanel from '../../components/common/SearchPanel/SearchPanel';
import BackgroundHero from '../../assets/img/mainPage/hero.png';

const HeroSection = () => {
  return (
    <section
      className="min-h-[40.75rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundHero})` }}
    >
      <div className="container mx-auto my-0 flex justify-end pt-24">
        <div className="relative flex max-w-[40rem] flex-col text-light-color">
          <h1 className="mb-40 self-end text-right font-third text-5xl font-normal not-italic">
            Discover and share travel guides from around the world
          </h1>
          <div className="absolute right-14 top-2/3 translate-y-[-50%]">
            <SearchPanel />
          </div>
          <p className="h-16 w-80 text-center font-fourth text-xl/6 font-normal not-italic">
            Explore new cities and find hidden gems with our community of
            travelers
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
