import GuideHeroStub from '../../assets/img/guidePage/GuideHeroStub.jpg';

const GuidePageHeroSection = () => {
  return (
    <section
      className="min-h-[35rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${GuideHeroStub})` }}
    ></section>
  );
};

export default GuidePageHeroSection;
