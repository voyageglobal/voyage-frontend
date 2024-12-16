import { memo } from 'react';
import GuideCard from '../GuideCard/GuideCard';
import GuidesNotFoundSection from '../../../pages/CityPage/NotFoundGuides';
import GuidesListSkeleton from './GuidesListSkeleton';

const GuidesList = ({ data: guides = [], error, isLoading }) => {
  if (isLoading) {
    return <GuidesListSkeleton />;
  }

  if (error || (guides.length === 0 && !isLoading)) {
    return <GuidesNotFoundSection />;
  }

  return (
    <ul className="mt-8 grid list-none gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {guides.map(guide => (
        <li key={guide.id}>
          <GuideCard
            guideId={guide.id}
            guideTitle={guide.name}
            guideText={guide.description}
            backgroundImage={guide.imageUrl}
            categories={guide.categories}
            cityId={guide.cities[0]?.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default memo(GuidesList);
