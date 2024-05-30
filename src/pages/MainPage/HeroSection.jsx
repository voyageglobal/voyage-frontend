import SearchPannel from '../../components/common/SearchPannel/SearchPannel';
import './heroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-info">
          <h1 className="hero-info-title">
            Discover and share travel guides from around the world
          </h1>
          <div className="hero-info-search">
            <SearchPannel />
          </div>
          <p className="hero-info-slogan">
            Explore new cities and find hidden gems with our community of
            travelers
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
