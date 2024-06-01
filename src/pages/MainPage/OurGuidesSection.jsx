import './ourGuidesSection.scss';

const OurGuidesSection = ({ guidesCount = 53, countriesCount = 21 }) => {
  return (
    <section className="our-guides-section">
      <div className="our-guides-section__wrapper">
        <div className="our-guides-section__content">
          <h2 className="our-guides-section__title">OUR GUIDES</h2>
          <p className="our-guides-section__text">
            Today there are <b>{guidesCount}</b> guides in <br />
            <b>{countriesCount}</b> countries in our community! <br /> Discover
            new cities and countries, or share your guide right now!
          </p>
          <button
            className="our-guides-section__button"
            aria-label="A button leading to a page with all the guides."
          >
            BON VOYAGE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurGuidesSection;
