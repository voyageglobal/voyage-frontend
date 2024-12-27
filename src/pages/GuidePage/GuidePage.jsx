import Page from '../../components/common/Page/Page';
import GuidePageHeroSection from './GuidePageHeroSection';
import GuideHeaderSection from './GuideHeaderSection';

const GuidePage = () => {
  return (
    <Page
      title="GuidePage"
      description="Welcome to the GuidePage on Voyage. Dive into unique user-generated travel guides for cities around the world. Discover hidden gems, explore detailed itineraries, and gain insights from fellow travelers. Whether you're planning your next trip or sharing your experiences, GuidePage is your destination for inspiration and connection. Start your journey with us today!"
    >
      <GuidePageHeroSection />
      <GuideHeaderSection />
    </Page>
  );
};

export default GuidePage;
