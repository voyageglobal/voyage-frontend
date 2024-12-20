import { Link, useParams } from 'react-router-dom';
import useGuideById from '../../hooks/useGuideById';

const GuideHeaderSection = () => {
  const { id: cityId } = useParams();
  const {
    guide,
    isLoading: isGuideLoading,
    error: guideError,
  } = useGuideById(cityId);

  const cityName = guide?.cities?.[0]?.name || 'Unknown City';
  const countryName = guide?.country?.name || 'Unknown Country';
  const guideName = guide.name;
  const startDate = guide.startDate;
  return (
    <section className="min-h-64 pt-10">
      <div className="container mx-auto">
        <div className="text-dark-color">
          <h2 className="inline-block pr-4 font-third text-4xl">{cityName}</h2>
          <Link
            className="inline-block font-primary text-2xl underline transition duration-300 ease-in-out hover:text-orange-color"
            to="/cities"
          >
            <h3>{countryName}</h3>
          </Link>
        </div>
        <div className="flex justify-between pt-10 font-fourth text-2xl font-light">
          <div className="flex">
            <p>Elon Musk</p>
            <p className="pl-10">{startDate}</p>
          </div>
          <div>
            <p>
              <b>Guide Type</b>: Historical landmarks
            </p>
          </div>
        </div>
        <div className="flex justify-between pt-5 font-fourth text-2xl font-light">
          <p title={guideName} className="line-clamp-4 w-2/4 font-medium">
            {guideName}
          </p>
          <p className="">Add to favorites</p>
        </div>
      </div>
    </section>
  );
};

export default GuideHeaderSection;
