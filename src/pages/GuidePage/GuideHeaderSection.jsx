import { Link } from 'react-router-dom';

const GuideHeaderSection = () => {
  return (
    <section className="min-h-64 pt-10">
      <div className="container mx-auto">
        <div className="text-dark-color">
          <h2 className="inline-block pr-4 font-third text-4xl">Barcelona</h2>
          <Link
            className="inline-block font-primary text-2xl underline transition duration-300 ease-in-out hover:text-orange-color"
            to="/cities"
          >
            <h3>Spain</h3>
          </Link>
        </div>
        <div className="flex justify-between pt-10 font-fourth text-2xl font-light">
          <div className="flex">
            <p>Elon Musk</p>
            <p className="pl-10">18.06.2022</p>
          </div>
          <div>
            <p>
              <b>Guide Type</b>: Historical landmarks
            </p>
          </div>
        </div>
        <div className="flex justify-between pt-5 font-fourth text-2xl font-light">
          <p className="font-medium">
            Walk through the Gothic Quarter of Barcelona
          </p>
          <p className="">Add to favorites</p>
        </div>
      </div>
    </section>
  );
};

export default GuideHeaderSection;
