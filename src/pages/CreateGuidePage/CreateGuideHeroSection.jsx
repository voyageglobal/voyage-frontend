import BackgroundHero from '../../assets/img/createGuide/CreateGuideHero.png';

const CreateGuideHeroSection = () => {
  return (
    <section
      className="min-h-[31rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundHero})` }}
    >
      <div className="container mx-auto pt-40">
        <h1 className="ml-[28rem] mt-60 inline-block font-third text-6xl text-dark-color text-shadow-header">
          Create your guide
        </h1>
      </div>
    </section>
  );
};

export default CreateGuideHeroSection;
