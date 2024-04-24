import React from "react";
import SwiperHero from "./swiper/SwiperHero";
import { Title } from "./HomeStyles";
import { TopBooks } from "./top5/TopBooks";
import { TopGames } from "./top5/TopGames";

export const Home = () => {
  return (
    <div className="wrapper shop">
      <Title>Our today's offer</Title>
      <SwiperHero />
      <TopBooks />
      <TopGames />
    </div>
  );
};
