import NavBar from '../../components/common/NavBar/NavBar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CitiesSection from './CitiesSection';
import Footer from './Footer';
/* import OurGuidesSection from './OurGuidesSection'; */

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
        {/*         <OurGuidesSection /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainPage;
