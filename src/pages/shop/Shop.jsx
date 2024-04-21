import React from "react";
import { ShopTitle, ShopProducts } from "./ShopStyles";
import { BOOKS } from "../../data/books";
import { Item } from "../item/Item";

export const Shop = () => {
  return (
    <div className="wrapper shop">
      <ShopTitle>
        <h1>Books</h1>
      </ShopTitle>
      <ShopProducts>
        {BOOKS.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ShopProducts>
    </div>
  );
};
