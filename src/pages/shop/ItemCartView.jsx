import React, { useContext } from "react";
import {
  ItemCartContainer,
  ImageCartContainer,
  TextCartContainer,
  IDCartContainer,
  NameCartContainer,
  PriceCartContainer,
  ItemsCartCounter,
  RemoveFromTheCartBtnCart,
} from "./ItemCartStyles";
import { ShopContext } from "../../context/ShopContext";

export const ItemCartView = ({
  id,
  itemName,
  price,
  itemImage,
  summaryPrice,
}) => {
  const { cartItems } = useContext(ShopContext);
  const { removeItemFromCart } = useContext(ShopContext);

  return (
    <ItemCartContainer>
      <ImageCartContainer>
        <img src={itemImage} alt={itemName} width="200" height="280" />
      </ImageCartContainer>
      <IDCartContainer>ID: {id}</IDCartContainer>
      <TextCartContainer>
        <NameCartContainer>{itemName}</NameCartContainer>
        <PriceCartContainer>
          Price: <strong>${price.toFixed(2)}</strong>
        </PriceCartContainer>
        <PriceCartContainer>
          Summary Price: <strong>${summaryPrice}</strong>
        </PriceCartContainer>
        <ItemsCartCounter
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          style={{
            display: cartItems[id] === 0 ? "none" : "flex",
            backgroundColor:
              cartItems[id] > 0 ? "#bbbbbb" : "rgba(255,255,255,0)",
          }}
        >
          {cartItems[id]}
        </ItemsCartCounter>
      </TextCartContainer>
      <RemoveFromTheCartBtnCart onClick={() => removeItemFromCart(id)}>
        Remove from the cart
      </RemoveFromTheCartBtnCart>
    </ItemCartContainer>
  );
};
