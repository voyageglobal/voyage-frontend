import Page from '../../components/common/Page/Page';
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';
import OurMissionSection from './OurMissionSection';
import OurValuesSection from './OurValuesSection';
import OurVisionSection from './OurVisionSection';
import OurStorySection from './OutStorySection';
import PatOfUsSection from './PartOfUsSection';
import SocialNetworksSection from './SocialNetworksSection';
import StatisticsSection from './StatisticsSection';

const AboutUsPage = () => {
  return (
    <Page
      title="About Us"
      description="Welcome to the About Us page on Voyage. Learn about our mission to help travelers discover and share unforgettable journeys. Meet our team, explore our story, and find out how we are committed to enhancing your travel experiences. Join us on this exciting adventure."
    >
      <HeroSection />
      <AboutUsSection />
      <OurStorySection />
      <PatOfUsSection />
      <StatisticsSection />
      <OurMissionSection />
      <OurVisionSection />
      <OurValuesSection />
      <SocialNetworksSection />
    </Page>
  );
};

export default AboutUsPage;
