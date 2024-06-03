import NavBar from '../../components/common/NavBar/NavBar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CitiesSection from './CitiesSection';
import BecomeGuide from './BecomeGuide';
import OurGuidesSection from './OurGuidesSection';

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
        <OurGuidesSection />
      </main>
    </>
  );
};

export default MainPage;
