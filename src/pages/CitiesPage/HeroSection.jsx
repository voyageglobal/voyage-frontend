import BackgroundHero from '../../assets/img/citiesPage/hero.png';
import SearchPanelSecondary from '../../components/common/SearchPanels/SearchPanelSecondary';

const HeroSection = () => {
  return (
    <section
      className="min-h-[35.5rem] bg-cover bg-center bg-no-repeat pt-20"
      style={{ backgroundImage: `url(${BackgroundHero})` }}
    >
      <div className="container mx-auto flex justify-center pt-5">
        <div className="max-w-xl">
          <p className="text-center font-fourth text-lg/5">
            Welcome to our search page! <br /> Here you can easily find the
            guides you need by entering <br /> the name of{' '}
            <b>the city or country</b> in the search box below. <br /> Simply
            enter your choice below and start your exciting adventure!
          </p>
          <h1 className="pt-24 text-center font-third text-3xl text-light-color text-shadow-header">
            Where would you like to go?
          </h1>
          <div className="pt-11">
            <SearchPanelSecondary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
