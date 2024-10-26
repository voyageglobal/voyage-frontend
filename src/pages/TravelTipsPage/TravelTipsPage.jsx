import Page from '../../components/common/Page/Page';
import TravelTipsHeroSection from '../../pages/TravelTipsPage/TravelTipsHeroSection';
import TravelTipsAllCards from './TravelTipsAllCards';

const TravelTipsPage = () => {
  return (
    <Page
      title="TravelTips"
      description="Welcome to Voyage's Travel Tips page. Here you'll find helpful tips to help you save time and money, make your trip convenient and unforgettable. Check out planning tips, saving tips, and helpful life hacks from seasoned travelers."
    >
      <TravelTipsHeroSection />
      <TravelTipsAllCards />
    </Page>
  );
};

export default TravelTipsPage;
