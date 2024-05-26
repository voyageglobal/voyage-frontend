import NavBar from '../../components/common/NavBar/NavBar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CitiesSection from './CitiesSection';

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
      </main>
    </>
  );
};

export default MainPage;
