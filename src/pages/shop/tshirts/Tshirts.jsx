import React from "react";
import { ShopTitle, ShopProducts } from "./TshirtsStyles";
import { TSHIRTS } from "../../../data/tshirts";
import { ItemShop } from "../../../components/item/ItemShop/ItemShop";

export const Books = () => {
  return (
    <div className="wrapper shop">
      <ShopTitle>
        <h1>T-shirts</h1>
      </ShopTitle>
      <ShopProducts>
        {TSHIRTS.map((item) => (
          <ItemShop key={item.id} {...item} />
        ))}
      </ShopProducts>
    </div>
  );
};
