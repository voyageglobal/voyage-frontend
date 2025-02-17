import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './guideCarouselSwiper.css';
const GuideImagesCarousel = ({ images }) => {
  if (!images.length) return null;
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      autoplay={false}
      style={{ height: '500px' }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Guide image ${index + 1}`}
            className="h-auto w-full object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(GuideImagesCarousel);
