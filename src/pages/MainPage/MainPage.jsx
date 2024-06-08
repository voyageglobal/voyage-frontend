import NavBar from '../../components/common/NavBar/NavBar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CitiesSection from './CitiesSection';
import Footer from './Footer';
import BecomeGuide from './BecomeGuide';
import OurGuidesSection from './OurGuidesSection';
import ContactsSection from './ContactsSection';
import TravelTips from './TravelTips';

const MainPage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <CitiesSection />
        <BecomeGuide />
        <ContactsSection />
        <OurGuidesSection />
        <TravelTips />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainPage;
