import Page from '../../components/common/Page/Page';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CitiesSection from './CitiesSection';
import BecomeGuide from './BecomeGuide';
import OurGuidesSection from './OurGuidesSection';
import ContactsSection from './ContactsSection';
import TravelTips from './TravelTips';
import MenuBottom from './MenuBottom';
import { Helmet } from 'react-helmet';

const MainPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Voyage is your best assistant for finding and sharing travel guides. Discover new places and share your journeys with the world. Welcome to the homepage of Voyage."
        />
        <title>Voyage</title>
      </Helmet>
      <Page>
        <HeroSection />
        <AboutSection />
        <CitiesSection />
        <BecomeGuide />
        <ContactsSection />
        <OurGuidesSection />
        <TravelTips />
        <MenuBottom />
      </Page>
    </>
  );
};

export default MainPage;
