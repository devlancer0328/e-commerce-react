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
  RemoveFromTheCartBtn,
} from "./ItemStyles";
import { ShopContext } from "../../context/ShopContext";

export const Item = ({ id, itemName, price, itemImage }) => {
  const { addItemToCart, cartItems } = useContext(ShopContext);
  const { removeItemFromCart, setRemoveItemFromCart } = useContext(ShopContext);

  return (
    <ItemContainer>
      <ImageContainer>
        <img src={itemImage} alt={itemName} width="200" height="280" />
      </ImageContainer>
      <IDContainer>ID: {id}</IDContainer>
      <TextContainer>
        <NameContainer>{itemName}</NameContainer>
        <PriceContainer>
          Cena: <strong>${price.toFixed(2)}</strong>
        </PriceContainer>
        <ItemsCounter
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        >
          {cartItems[id]}
        </ItemsCounter>
      </TextContainer>
      <AddToCartBtn onClick={() => addItemToCart(id)}>Add to cart</AddToCartBtn>
      <RemoveFromTheCartBtn onClick={() => removeItemFromCart(id)}>
        Remove from the cart
      </RemoveFromTheCartBtn>
    </ItemContainer>
  );
};
