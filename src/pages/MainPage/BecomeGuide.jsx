import { Link } from 'react-router-dom';
import { ROUTES } from '../../App';

import BackgroundBecomeGuide from '../../assets/img/mainPage/BecomeGuideBackground2560.png';

const BecomeGuide = () => {
  return (
    <section
      className="mt-14 min-h-[40rem] bg-cover bg-top bg-no-repeat pt-40 contrast-[.95] drop-shadow-[1px_0px_1px_rgba(23,23,23,0.3)]"
      style={{ backgroundImage: `url(${BackgroundBecomeGuide})` }}
    >
      <div className="container mx-auto text-center">
        <h2 className="font-fourth text-2rem font-normal">BECOME A GUIDE!</h2>
        <div className="mx-auto mt-8 font-primary text-xl">
          <p>
            Contribute to our community by adding your own guide! Share insights
            about your favorite spots in the city or country. <br /> Upload
            descriptions of interesting places, landmarks, and photo shoot
            ideas.
            <br /> It&apos;s easy – just a few minutes, your location, and a
            photo of the place, and you&apos;re done! <br /> Make our database
            as unique as your adventures. <br /> Let&apos;s explore together!
          </p>
          <p className="mt-8">
            Voyage into the unknown, discover the extraordinary!
          </p>
        </div>
        <Link
          to={ROUTES.signIn}
          className="mx-auto mt-8 block h-12 w-60 rounded-10px bg-orange-color pt-3 text-center font-fourth text-base text-light-color"
        >
          SIGN IN AND CREATE
        </Link>
      </div>
    </section>
  );
};

export default BecomeGuide;
