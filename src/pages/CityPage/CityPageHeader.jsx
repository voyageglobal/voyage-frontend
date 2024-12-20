import { Link } from 'react-router-dom';

const CityPageHeader = () => {
  return (
    <section className="min-h-48">
      <div className="container mx-auto pt-14">
        <div className="text-dark-color">
          <h2 className="inline-block pr-4 font-third text-4xl">Rome</h2>

          <Link
            className="inline-block font-primary text-2xl underline transition duration-300 ease-in-out hover:text-orange-color"
            to="/cities"
          >
            <h3>Italy</h3>
          </Link>

          <p className="mt-10 font-fourth text-lg/6">
            Rome was called the “Eternal City” by the ancient Romans because
            they believed that no matter what happened in the rest of the world,
            the city of Rome would always remain standing. <br /> Exploring the
            city center by foot surrounded by glorious monuments and colossal
            remains takes you back in time to the “glory that was Rome”.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityPageHeader;
