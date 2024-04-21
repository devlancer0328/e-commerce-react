import React, { useContext } from "react";
import {
  ItemContainer,
  ImageContainer,
  TextContainer,
  IDContainer,
  NameContainer,
  PriceContainer,
  AddToCartBtn,
  ItemsCounter,
} from "./ItemStyles";
import { ShopContext } from "../../context/ShopContext";

export const Item = ({ id, itemName, price, itemImage }) => {
  const { addItemToCart, cartItems } = useContext(ShopContext);

  return (
    <ItemContainer>
      <ImageContainer>
        <img src={itemImage} alt={itemName} width="200" height="280" />
      </ImageContainer>
      <IDContainer>ID: {id}</IDContainer>
      <TextContainer>
        <NameContainer>{itemName}</NameContainer>
        <PriceContainer>
          Price: <strong>${price.toFixed(2)}</strong>
        </PriceContainer>
        <ItemsCounter
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          style={{
            display: cartItems[id] === 0 ? "none" : "flex",
            backgroundColor:
              cartItems[id] > 0 ? "#bbbbbb" : "rgba(255,255,255,0)",
          }}
        >
          {cartItems[id]}
        </ItemsCounter>
      </TextContainer>
      <AddToCartBtn onClick={() => addItemToCart(id)}>Add to cart</AddToCartBtn>
    </ItemContainer>
  );
};
