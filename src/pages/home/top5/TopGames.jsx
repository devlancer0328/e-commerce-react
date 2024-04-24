import React from "react";
import { ShopTitle, ShopProducts } from "./../../shop/games/GamesStyles";
import { PS5GAMES } from "../../../data/games";
import { Item } from "../../item/Item";
import { SeoTextContainer } from "./SeoTextStyles";

export const TopGames = () => {
  const shuffledGames = PS5GAMES.sort(() => Math.random() - 0.5);
  const randomFiveGames = shuffledGames.slice(0, 5);

  return (
    <div className="wrapper">
      <ShopTitle>
        <h1>Top 5 Games</h1>
      </ShopTitle>
      <ShopProducts>
        {randomFiveGames.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ShopProducts>
      <SeoTextContainer>
        <p>
          Welcome to the extraordinary world of entertainment in our online
          store BuyIt! Discover unforgettable adventures, emotions, and
          challenges in the latest games we have for you. Whether you're a fan
          of action games, RPGs, or strategy games - you'll find a wide
          selection here that will meet your expectations and more! Ready for
          some great fun? Here are a few reasons why it's worth buying games at
          BuyIt:
        </p>
        <ol>
          <li>
            <strong>Freshest Titles:</strong> You'll always find the newest and
            most anticipated games on the market with us. Don't waste time
            looking elsewhere - everything you need is right here.
          </li>
          <li>
            <strong>Great Selection:</strong> Regardless of your preferences and
            tastes, our store offers a wide variety of games that will suit you.
            Explore diverse worlds, embody extraordinary characters, and
            experience emotions you won't find anywhere else.
          </li>
          <li>
            <strong>Excellent Quality:</strong> At BuyIt, we ensure that every
            game we offer meets the highest quality standards. This way, you can
            be sure that every game you purchase will provide you with
            unforgettable experiences and satisfaction.
          </li>
        </ol>
        <p>
          Don't wait any longer - join our gaming community and start your
          gaming adventure today at BuyIt!
        </p>
      </SeoTextContainer>
    </div>
  );
};
