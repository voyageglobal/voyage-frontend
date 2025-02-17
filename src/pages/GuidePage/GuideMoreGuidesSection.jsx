import { Link, useParams, generatePath } from 'react-router-dom';
import useGuideById from '../../hooks/useGuideById';
import useAllGuides from '../../hooks/useAllGuides';
import GuidesList from '../../components/common/GuidesList/GuidesList';

import { ROUTES } from '../../App';

const useMoreGuides = cityId => {
  const {
    data: guides = [],
    error,
    isLoading,
  } = useAllGuides(
    {
      pageSize: 4,
      sortOrder: 'popular',
      cityId,
    },
    { enabled: !!cityId },
  );

  return { guides, error, isLoading };
};

const GuideMoreGuidesSection = () => {
  const { id: guideId } = useParams();

  const { guide } = useGuideById(guideId);

  const cityId = guide?.cities?.[0]?.id;

  const { guides, error, isLoading } = useMoreGuides(cityId);

  const restOfGuides = guides.filter(guide => guide.id !== guideId);

  if (!cityId || !restOfGuides.length) {
    return null;
  }

  return (
    <section className="min-h-96 pt-24">
      <div className="container mx-auto">
        <h4 className="font-fourth text-2xl">
          More guides in{' '}
          {`${guide?.cities?.[0]?.name || 'Unknown City'}, ${guide?.country?.name || 'Unknown Country'}:`}
        </h4>
        <div className="mt-8">
          <GuidesList data={restOfGuides} error={error} isLoading={isLoading} />
        </div>
        <div className="mt-10 flex justify-center">
          {cityId && (
            <Link
              className="w-96 rounded-lg px-6 py-3 text-center text-lg font-semibold shadow-md transition hover:bg-orange-color hover:text-white"
              to={generatePath(ROUTES.city, { id: cityId })}
            >
              {`View all guides in ${guide?.cities?.[0]?.name || 'Unknown City'}, ${guide?.country?.name || 'Unknown Country'}`}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default GuideMoreGuidesSection;
