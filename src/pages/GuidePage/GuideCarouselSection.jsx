import GuideImagesCarousel from '../../components/common/Carousels/GuideImagesCarousel';
/* import { useParams } from 'react-router-dom';
import useGuideById from '../../hooks/useGuideById'; */

const GuideCarouselSection = () => {
  /*   const { id: guideId } = useParams();

  const {
    guide,
    isLoading: isGuideLoading,
    error: guideError,
  } = useGuideById(guideId);

  const imagesContent = guide?.imagesContent; */

  const contentImages = [
    'https://roomer.by/sites/default/files/nezavis1.jpg',
    'https://turby.by/images/01.09/Screenshot_237.jpg',
    'https://belarusgid.com/wp-content/uploads/2015/05/359712_main.jpg',
    'https://vetliva.ru/upload/resize_cache/iblock/7d5/630_350_2/7d5790376384f726ab46bb7b439e16a0.jpg',
  ];
  const imagesContent = contentImages;

  return (
    <div className="container mx-auto">
      <section className="h-[35rem] pt-10">
        <GuideImagesCarousel images={imagesContent} />
      </section>
    </div>
  );
};

export default GuideCarouselSection;
