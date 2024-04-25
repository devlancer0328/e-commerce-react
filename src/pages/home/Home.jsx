import React from "react";
import SwiperHero from "./../../components/home/swiper/SwiperHero";
import { Title } from "./HomeStyles";
import { TopBooks } from "./../../components/home/top5/TopBooks";
import { TopGames } from "./../../components/home/top5/TopGames";

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
