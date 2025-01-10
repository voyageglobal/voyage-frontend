/* import { useParams } from 'react-router-dom';
import useGuideById from '../../hooks/useGuideById'; */
import GuideHeroStub from '../../assets/img/guidePage/GuideHeroStub.jpg';

const primaryImage = [
  'https://34travel.me/media/posts/66fd087d2145d-minsk-2024.jpg',
];
const GuidePageHeroSection = () => {
  /*   const { id: guideId } = useParams();

  const {
    guide,
    isLoading: isGuideLoading,
    error: guideError,
  } = useGuideById(guideId);

  const imagePrimary = guide?.imagePrimary; */
  const imagePrimary = primaryImage;
  return (
    <section
      className="min-h-[35rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imagePrimary || GuideHeroStub})` }}
    ></section>
  );
};

export default GuidePageHeroSection;
