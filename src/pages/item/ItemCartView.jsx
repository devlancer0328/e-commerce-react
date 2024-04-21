import React, { useContext } from "react";
import {
  ItemCartContainer,
  ImageCartContainer,
  TextCartContainer,
  IDCartContainer,
  NameCartContainer,
  PriceCartContainer,
  ItemsCartCounter,
  CartBtn,
  QuantityBox,
  QuantityContainer,
} from "./ItemCartViewStyles";
import { ShopContext } from "../../context/ShopContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export const ItemCartView = ({
  id,
  itemName,
  price,
  itemImage,
  summaryPrice,
}) => {
  const {
    cartItems,
    removeItemFromCart,
    removeAllItemsFromCart,
    addItemToCart,
  } = useContext(ShopContext);

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
        <QuantityContainer>
          <CartBtn onClick={() => removeItemFromCart(id)}>
            <AiOutlineMinus />
          </CartBtn>
          <ItemsCartCounter
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          >
            <QuantityBox>
              <p>Quantity:</p>
              {cartItems[id]}
            </QuantityBox>
          </ItemsCartCounter>
          <CartBtn onClick={() => addItemToCart(id)}>
            <AiOutlinePlus />
          </CartBtn>
        </QuantityContainer>
      </TextCartContainer>
      <CartBtn onClick={() => removeAllItemsFromCart(id)}>
        <RiDeleteBin6Line />
      </CartBtn>
    </ItemCartContainer>
  );
};
