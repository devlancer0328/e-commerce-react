import React, { useContext } from 'react'
import { ItemContainer, ImageContainer, TextContainer, IDContainer, NameContainer, PriceContainer, AddToCartBtn, ItemsCounter } from './ItemStyles'
import { ShopContext } from '../../context/ShopContext'

export const Item = ({id, itemName, price, itemImage}) => {
  const { addItemToCart, cartItems } = useContext(ShopContext);

  return (
    <ItemContainer>
        <ImageContainer>
            <img src={itemImage} alt={itemName} width="200" height="280" />
        </ImageContainer>
        <IDContainer>ID: {id}</IDContainer>
        <TextContainer>
          <NameContainer>{itemName}</NameContainer>
          <PriceContainer>Cena: <strong>${price.toFixed(2)}</strong></PriceContainer>
          <ItemsCounter>{cartItems[id]}</ItemsCounter>
        </TextContainer>
        <AddToCartBtn onClick={() => addItemToCart(id)}>Add to cart</AddToCartBtn>
    </ItemContainer>
  )
}
