import GuideImagesCarousel from '../../components/common/Carousels/GuideImagesCarousel';
/* import { useParams } from 'react-router-dom';
import useGuideById from '../../hooks/useGuideById'; */

const GuideIMGCarouselSection = () => {
  /*   const { id: guideId } = useParams();

  const {
    guide,
    isLoading: isGuideLoading,
    error: guideError,
  } = useGuideById(guideId);

  const imagesContent = guide?.imagesContent; */
  const imagesContent = [
    'https://images.wallpaperscraft.ru/image/single/krasivyj_pejzazh_gory_ozero_93318_1280x1024.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6uGAVFioLEAeBEhnuDEksNxaNgzdjfEllPw&s',
    'https://img.goodfon.ru/wallpaper/big/2/5c/park-priroda-horosho.webp',
  ];

  return (
    <section className="h-[35rem] pt-10">
      <GuideImagesCarousel images={imagesContent} />
    </section>
  );
};

export default GuideIMGCarouselSection;
