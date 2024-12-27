import { useSearchParams } from 'react-router-dom';
import AllCitiesList from '../../components/features/AllCitiesList';
import CreateGuideButton from '../../components/common/CreateGuideButton/CreateGuideButton';

const CitiesSection = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';

  const displayText = searchQuery
    ? `City Guides: ${searchQuery}`
    : 'City Guides';

  return (
    <section className="min-h-[48.13rem] pb-14 pt-28">
      <div className="container mx-auto">
        <h2 className="font-fourth text-2rem font-normal underline">
          {displayText}
        </h2>
        <div className="mt-6 flex items-center justify-between">
          <h3 className="font-fourth text-xl font-normal">
            Explore city guides for your next adventure
          </h3>
          <CreateGuideButton />
        </div>
        <AllCitiesList initialLimit={10} />
      </div>
    </section>
  );
};

export default CitiesSection;
