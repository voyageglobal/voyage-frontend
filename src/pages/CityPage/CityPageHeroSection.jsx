import BackgroundHeroStub from '../../assets/img/cityPage/cityPageHero.png';

const CityPageHeroSection = () => {
  return (
    <section
      className="min-h-[35rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundHeroStub})` }}
    ></section>
  );
};

export default CityPageHeroSection;
