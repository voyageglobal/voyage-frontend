import { Link } from 'react-router-dom';
import { ROUTES } from '../../App';
import NotFoundIMG from '../../assets/img/citiesPage/NotFoundIMG.svg';
const NotFoundSection = () => {
  return (
    <section className="min-h-96 p-14">
      <div className="container mx-auto flex h-96 flex-col items-center justify-between">
        <NotFoundIMG />
        <h3 className="font-third text-xl">
          Sorry, we didn&apos;t find anything
        </h3>
        <p className="w-3/5 text-center font-primary text-xl/6">
          It seems there&apos;s an issue with your search. Perhaps you&apos;ve
          made a mistake in the city or country name, or nobody has yet created
          a guide for this specific location. <br /> Don&apos;t worry! <br />
          The world is vast, and we believe every corner of it deserves its own
          guide. <br /> If you&apos;re sure the place exists, stay with us -
          someone will surely share their knowledge about it soon! Or you can be
          the first!
        </p>
        <Link
          to={ROUTES.createGuide}
          className="inline-block h-8 w-56 rounded-10px bg-orange-color text-center font-fourth text-base/8 text-light-color"
        >
          CREATE GUIDE
        </Link>
      </div>
    </section>
  );
};
export default NotFoundSection;
