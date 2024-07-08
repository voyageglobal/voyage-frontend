import Page from '../../components/common/Page/Page';
import HeroSection from './HeroSection';
import CitiesSection from './CitiesSection';
import NotFoundSection from './NotFoundSection';

const CitiesPage = () => {
  return (
    <Page
      title="Cities"
      description="Discover comprehensive travel guides for cities around the world on Voyage. Explore detailed itineraries, local tips, and hidden gems in every city guide. Start your adventure and share your experiences with fellow travelers."
    >
      <HeroSection />
      <CitiesSection />
      {false && <NotFoundSection />}
    </Page>
  );
};

export default CitiesPage;
