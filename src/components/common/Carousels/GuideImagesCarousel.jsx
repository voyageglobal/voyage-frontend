import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GuideImagesCarousel = ({ images }) => {
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
            className="h-auto w-full"
          />
        </SwiperSlide>
      ))}

      <style>
        {`
          .swiper-pagination-bullet {
            background-color: orange !important;
            width: 20px !important;
            height: 20px !important;
          }
          .swiper-button-next, .swiper-button-prev {
            color: orange !important;
           }
        `}
      </style>
    </Swiper>
  );
};

export default GuideImagesCarousel;
