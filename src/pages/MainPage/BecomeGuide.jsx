import './becomeGuide.scss';

const BecomeGuide = () => {
  return (
    <section className="becomeGuide">
      <div className="becomeGuide-wrapper">
        <h2 className="becomeGuide-title">BECOME A GUIDE!</h2>
        <div className="becomeGuide-info">
          <p className="becomeGuide-text">
            Contribute to our community by adding your own guide! Share insights
            about your favorite spots in the city or country. <br /> Upload
            descriptions of interesting places, landmarks, and photo shoot
            ideas.
            <br /> It&apos;s easy – just a few minutes, your location, and a
            photo of the place, and you&apos;re done! <br /> Make our database
            as unique as your adventures. <br /> Let&apos;s explore together!
          </p>
          <p className="becomeGuide-call">
            Voyage into the unknown, discover the extraordinary!
          </p>
        </div>
        <button className="becomeGuide-button">SIGN IN AND CREATE</button>
      </div>
    </section>
  );
};

export default BecomeGuide;
