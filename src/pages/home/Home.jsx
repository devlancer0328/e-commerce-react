import React from "react";
import SwiperHero from "./swiper/SwiperHero";
import { Title } from "./HomeStyles";

export const Home = () => {
  return (
    <div className="wrapper shop">
      <Title>Our today's offer</Title>
      <SwiperHero />
    </div>
  );
};
