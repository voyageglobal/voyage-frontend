import Page from '../../components/common/Page/Page';
import HeroSection from './HeroSection';
import CitiesSection from './CitiesSection';
import { SearchProvider } from '../../context/SearchContext';
import { DataProvider } from '../../context/DataContext';

const CitiesPage = () => {
  return (
    <SearchProvider>
      <DataProvider>
        <Page
          title="Cities"
          description="Discover comprehensive travel guides for cities around the world on Voyage. Explore detailed itineraries, local tips, and hidden gems in every city guide. Start your adventure and share your experiences with fellow travelers."
        >
          <HeroSection />
          <CitiesSection />
        </Page>
      </DataProvider>
    </SearchProvider>
  );
};

export default CitiesPage;
