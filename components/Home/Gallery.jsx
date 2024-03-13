import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";

export default function Gallery() {
  return (
    <div className="py-[10%]">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={"gallery_image_1.webp"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"gallery_image_2.webp"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"gallery_image_3.webp"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"gallery_image_1.webp"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"gallery_image_2.webp"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"gallery_image_3.webp"} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
