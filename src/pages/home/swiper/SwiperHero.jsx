// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperHeroContainer } from "./SwiperHeroStyles";

import banner01 from "./../../../assets/img/home/hero_swiper/banner01.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperHero = () => {
  return (
    <SwiperHeroContainer>
      <Swiper
        style={{ height: "440px" }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={banner01} alt="banner" width={800} height={400} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner01} alt="banner" width={800} height={400} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner01} alt="banner" width={800} height={400} />
        </SwiperSlide>
      </Swiper>
    </SwiperHeroContainer>
  );
};

export default SwiperHero;
