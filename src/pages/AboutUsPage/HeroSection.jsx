import BackgroundHero from '../../assets/img/AboutUsPage/hero.png';

const HeroSection = () => {
  return (
    <section
      className="min-h-[32.75rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundHero})` }}
    >
      <div className="container mx-auto pt-40">
        <h1 className="ml-52 inline-block w-64 text-right font-third text-6xl text-orange-color">
          ABOUT US
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
