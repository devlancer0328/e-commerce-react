import React from 'react'
import { ItemContainer, ImageContainer, TextContainer, IDContainer, NameContainer, PriceContainer, AddToCartBtn } from './ItemStyles'

export const Item = ({id, itemName, price, itemImage}) => {
  return (
    <ItemContainer>
        <ImageContainer>
            <img src={itemImage} alt={itemName} width="200" height="280" />
        </ImageContainer>
        <IDContainer>ID: {id}</IDContainer>
        <TextContainer>
          <NameContainer>{itemName}</NameContainer>
          <PriceContainer>Cena: <strong>${price}</strong></PriceContainer>
        </TextContainer>
        <AddToCartBtn>Add to cart</AddToCartBtn>
    </ItemContainer>
  )
}
