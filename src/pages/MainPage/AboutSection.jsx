import about from '../../assets/img/mainPage/about.png';
import './aboutSection.scss';

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-wrapper">
        <div className="about-info">
          <h2 className="about-title">About VOYAGE</h2>
          <p className="about-text">
            We are an independent community of travelers and city experts.
            <br />
            We believe that the best guides are those created by travelers
            themselves, people who are truly passionate about cities and know
            every corner of them. Here you will find unique tips, hidden gems,
            and unforgettable places that are not described in standard
            guidebooks.
            <br />
            We invite you to share your knowledge and experience with us and
            other travelers, to create true masterpieces of guides together and
            to share inspiration.
            <br />
            <br />
            Join our community right now, post your guide, and help others
            discover the world!
          </p>
          <a className="about-link" href="">
            LEARN MORE
          </a>
        </div>
        <img
          className="about-img"
          src={about}
          alt="The introductory picture of travelers"
        />
      </div>
    </section>
  );
};

export default AboutSection;
