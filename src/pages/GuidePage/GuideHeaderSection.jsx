import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import useGuideById from '../../hooks/useGuideById';
import useFormattedDate from '../../hooks/useFormattedDate';
import { ROUTES } from '../../App';
import { DEFAULT_USERNAME } from '../../data/userName';
import DynamicIcon from '../../components/common/DynamicIcon/DynamicIcon';

const GuideHeaderSection = () => {
  const { id: guideId } = useParams();

  const {
    guide,
    isLoading: isGuideLoading,
    error: guideError,
  } = useGuideById(guideId);

  const cityName = guide?.cities?.[0]?.name || 'Unknown City';
  const countryName = guide?.country?.name || 'Unknown Country';
  const guideName = guide?.name || 'Untitled Guide';
  const startDate = useFormattedDate(guide?.startDate);
  const categoryIcons = useMemo(() => {
    if (!guide?.categories) return [];
    return guide.categories.map(category => (
      <DynamicIcon
        key={category.key}
        name={category.iconName}
        className="text-dark-color/80"
        size="20px"
      />
    ));
  }, [guide]);

  if (isGuideLoading) {
    return <p>Loading guide...</p>;
  }

  if (guideError) {
    return <p>Error loading guide: {guideError.message}</p>;
  }

  if (!guide) {
    return <p>No guide found.</p>;
  }

  return (
    <section className="min-h-64 pt-10">
      <div className="container mx-auto">
        <div className="text-dark-color">
          <h2 className="inline-block pr-4 font-third text-4xl">{cityName}</h2>
          <Link
            className="inline-block font-primary text-2xl underline transition duration-300 ease-in-out hover:text-orange-color"
            to={ROUTES.cities}
          >
            <h3>{countryName}</h3>
          </Link>
        </div>
        <div className="flex justify-between pt-10 font-fourth text-2xl font-light">
          <div className="flex">
            <p>{DEFAULT_USERNAME}</p>
            <p className="pl-10">{startDate || 'Unknown Date'}</p>
          </div>
          <div>
            <p>
              <b>Guide Type</b>:
            </p>
            <div className="flex max-w-36 flex-wrap justify-start gap-1.5">
              {categoryIcons}
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-5 font-fourth text-2xl font-light">
          <p title={guideName} className="line-clamp-4 w-2/4 font-medium">
            {guideName}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuideHeaderSection;
