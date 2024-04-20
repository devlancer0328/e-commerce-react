import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { ITEMS } from "../../data/items";
import { ItemCartView } from "../item/ItemCartView";
import { CartContainer, Title } from "./CartStyles";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  // Function to calculate the summary price for each item
  const calculateItemSummaryPrice = (item) => {
    const quantity = cartItems[item.id];
    return quantity * item.price;
  };

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
            const summaryPrice = calculateItemSummaryPrice(item);
            return (
              <ItemCartView
                key={item.id}
                {...item}
                summaryPrice={summaryPrice}
              />
            );
          }
          return null; // Handle case where item is not in cart
        })}
      </CartContainer>
      <p>Total Quantity: {totalQuantity}</p>
    </div>
  );
};
