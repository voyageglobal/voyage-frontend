import { useState } from 'react';
import Page from '../../components/common/Page/Page';
import GuidePageHeroSection from './GuidePageHeroSection';
import GuideHeaderSection from './GuideHeaderSection';
import GuideCarouselSection from './GuideCarouselSection';
import GuideArticleSection from './GuideArticleSection';
import GuideMoreGuidesSection from './GuideMoreGuidesSection';
import GuideMostPopularCitiesSection from './GuideMostPopularCitiesSection';

const GuidePage = () => {
  const [guideName, setGuideName] = useState('GuidePage');
  return (
    <Page
      title={guideName}
      description="Welcome to the GuidePage on Voyage. Dive into unique user-generated travel guides for cities around the world. Discover hidden gems, explore detailed itineraries, and gain insights from fellow travelers. Whether you're planning your next trip or sharing your experiences, GuidePage is your destination for inspiration and connection. Start your journey with us today!"
    >
      <GuidePageHeroSection />
      <GuideHeaderSection setGuideName={setGuideName} />
      <GuideCarouselSection />
      <GuideArticleSection />
      <GuideMoreGuidesSection />
      <GuideMostPopularCitiesSection />
    </Page>
  );
};

export default GuidePage;
