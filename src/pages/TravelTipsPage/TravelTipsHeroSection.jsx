import BackgroundHero from '../../assets/img/TravelTips/TravelTipsHeroBG.png';

const TravelTipsHeroSection = () => {
  return (
    <section
      className="min-h-[39.625rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundHero})` }}
    >
      <div className="container mx-auto pt-40">
        <h1 className="text-center font-third text-7xl text-dark-color text-shadow-header">
          Travel tips
        </h1>

        <p className="mx-auto h-52 w-[46rem] rounded-md bg-light-color/60 pt-3 text-center font-fourth text-2xl font-normal not-italic">
          Welcome to the Travel tips section! Here you'll find articles on
          various topics, hacks, and tips on getting the most out of your trips.
          From unique places to local customs, we'll help you learn more about
          each city. <br /> And don't forget to check out the "Write your first
          guide" section to share your own adventures with the world!
        </p>
      </div>
    </section>
  );
};

export default TravelTipsHeroSection;
