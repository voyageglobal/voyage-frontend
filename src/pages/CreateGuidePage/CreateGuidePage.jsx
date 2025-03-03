import Page from '../../components/common/Page/Page';
import CreateGuideHeroSection from './CreateGuideHeroSection';
import CreateGuideFormSection from './CreateGuideFormSection';

const CreateGuidePage = () => {
  return (
    <Page
      title="Create Your Travel Guide"
      description="Welcome to the guide creation page on Voyage. Share your travel experiences and tips by creating your own comprehensive travel guide. Help fellow travelers discover new places and hidden gems. Start crafting your unique journey now."
    >
      <CreateGuideHeroSection />
      <CreateGuideFormSection />
    </Page>
  );
};

export default CreateGuidePage;
