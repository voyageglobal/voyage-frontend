import Page from '../../components/common/Page/Page';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CitiesSection from './CitiesSection';
import BecomeGuide from './BecomeGuide';
import OurGuidesSection from './OurGuidesSection';
import ContactsSection from './ContactsSection';
import TravelTips from './TravelTips';
import MenuBottom from './MenuBottom';
import { useStatistics } from '../../hooks/useStatistics';

const MainPage = () => {
  const { statistics, error, isLoading } = useStatistics();
  const totalGuides = isLoading
    ? '...'
    : error
      ? 'N/A'
      : statistics?.totalGuides;
  const totalCountries = isLoading
    ? '...'
    : error
      ? 'N/A'
      : statistics?.totalCountries;

  return (
    <Page
      title="Voyage"
      description="Voyage is your best assistant for finding and sharing travel guides. Discover new places and share your journeys with the world. Welcome to the homepage of Voyage."
    >
      <HeroSection />
      <AboutSection />
      <CitiesSection />
      <BecomeGuide />
      <ContactsSection />
      <OurGuidesSection
        totalGuides={totalGuides}
        totalCountries={totalCountries}
      />
      <TravelTips />
      <MenuBottom />
    </Page>
  );
};

export default MainPage;
