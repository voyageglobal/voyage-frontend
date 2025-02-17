import Page from '../../components/common/Page/Page';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import PopularCitiesSection from './PopularCitiesSection';
import BecomeGuide from './BecomeGuide';
import OurGuidesSection from './OurGuidesSection';
import ContactsSection from './ContactsSection';
import TravelTips from './TravelTips';
import MenuBottom from './MenuBottom';
import { useTransformedStatistics } from '../../hooks/useTransformedStatistics';

const MainPage = () => {
  const { totalGuides, totalCountries, isLoading } = useTransformedStatistics();

  return (
    <Page
      title="Voyage"
      description="Voyage is your best assistant for finding and sharing travel guides. Discover new places and share your journeys with the world. Welcome to the homepage of Voyage."
    >
      <HeroSection />
      <AboutSection />
      <PopularCitiesSection />
      <BecomeGuide />
      <ContactsSection />
      <OurGuidesSection
        totalGuides={totalGuides}
        totalCountries={totalCountries}
        isLoading={isLoading}
      />
      <TravelTips />
      <MenuBottom />
    </Page>
  );
};

export default MainPage;
