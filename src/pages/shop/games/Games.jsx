import React from "react";
import { ShopTitle, ShopProducts } from "./GamesStyles";
import { PS5GAMES } from "../../../data/games";
import { Item } from "../../item/Item";

export const Games = () => {
  return (
    <div className="wrapper shop">
      <ShopTitle>
        <h1>Games</h1>
      </ShopTitle>
      <ShopProducts>
        {PS5GAMES.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ShopProducts>
    </div>
  );
};
