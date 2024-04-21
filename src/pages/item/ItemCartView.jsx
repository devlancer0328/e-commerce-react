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
  QuantityBox,
} from "./ItemCartViewStyles";
import { ShopContext } from "../../context/ShopContext";
import { RiDeleteBin6Line } from "react-icons/ri";

export const ItemCartView = ({
  id,
  itemName,
  price,
  itemImage,
  summaryPrice,
}) => {
  const { cartItems, removeItemFromCart } = useContext(ShopContext);

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
        >
          <QuantityBox>
            <p>Quantity:</p>
            {cartItems[id]}
          </QuantityBox>
        </ItemsCartCounter>
      </TextCartContainer>
      <RemoveFromTheCartBtnCart onClick={() => removeItemFromCart(id)}>
        <RiDeleteBin6Line />
      </RemoveFromTheCartBtnCart>
    </ItemCartContainer>
  );
};
