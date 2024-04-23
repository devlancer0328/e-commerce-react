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
import banner02 from "./../../../assets/img/home/hero_swiper/banner02.jpg";
import banner03 from "./../../../assets/img/home/hero_swiper/banner03.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const SwiperHero = () => {
  return (
    <SwiperHeroContainer>
      <Swiper
        style={{ height: "440px" }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
          <Link to="/e-commerce-react/games">
            <img src={banner01} alt="banner" width={800} height={400} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/e-commerce-react/games">
            <img src={banner02} alt="banner" width={800} height={400} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/e-commerce-react/games">
            <img src={banner03} alt="banner" width={800} height={400} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </SwiperHeroContainer>
  );
};

export default SwiperHero;
