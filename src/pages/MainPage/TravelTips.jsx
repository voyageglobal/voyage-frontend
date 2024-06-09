import './travelTips.scss';

const TravelTips = () => {
  return (
    <section className="travel-tips-section">
      <div className="travel-tips-section__wrapper">
        <div className="travel-tips-section__content">
          <h2 className="travel-tips-section__title">TRAVEL TIPS</h2>
          <p className="travel-tips-section__text">
            Explore our helpful tips for perfect journeys around the world: from
            planning to packing. <br /> Learn how to make the most of your
            adventures and create unforgettable memories.
          </p>
          <button
            className="travel-tips-section__button"
            aria-label="A button leading to a page with all travel tips."
          >
            GET INSPIRED
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
