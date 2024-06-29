import { Link } from 'react-router-dom';
import about from '../../assets/img/mainPage/about.png';

const AboutSection = () => {
  return (
    <section className="min-h-96">
      <div className="container mx-auto flex justify-between pt-24">
        <div className="flex h-80 max-w-2xl flex-col justify-between">
          <h2 className="font-fourth text-2rem font-normal">About VOYAGE</h2>
          <p className="mt-8 font-primary text-xl/6">
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
          <Link
            className="mt-10 font-fourth text-base font-medium text-dark-color underline"
            to="/about-us"
          >
            LEARN MORE
          </Link>
        </div>
        <img
          className="block h-fit"
          src={about}
          alt="The introductory picture of travelers"
        />
      </div>
    </section>
  );
};

export default AboutSection;
