import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { ITEMS } from "../../data/items";
import { Item } from "../shop/Item";
import { CartContainer, Title } from "./CartStyles";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  // Calculate total quantity of items in the cart
  const totalQuantity = Object.values(cartItems).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div className="wrapper cart">
      <Title>Twój koszyk</Title>
      <CartContainer>
        {ITEMS.map((item) => {
          if (cartItems.hasOwnProperty(item.id) && cartItems[item.id] !== 0) {
            return <Item key={item.id} {...item} />;
          }
          return null; // Handle case where item is not in cart
        })}
      </CartContainer>
      <p>Total Quantity: {totalQuantity}</p>
    </div>
  );
};
