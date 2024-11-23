import Page from '../../components/common/Page/Page';
import CityPageHeroSection from './CityPageHeroSection';
import CityPageHeader from './CityPageHeader';
import CityPageGuides from './CityPageGuides';

const CityPage = () => {
  return (
    <Page
      title="CityPage"
      description="Welcome to the CityPage page on Voyage. Learn about our mission to help travelers discover and share unforgettable journeys. Meet our team, explore our story, and find out how we are committed to enhancing your travel experiences. Join us on this exciting adventure."
    >
      <CityPageHeroSection />
      <CityPageHeader />
      <CityPageGuides />
    </Page>
  );
};

export default CityPage;
