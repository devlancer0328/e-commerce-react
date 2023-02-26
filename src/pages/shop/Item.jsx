import React from 'react'
import { ItemContainer } from './ItemStyles'

export const Item = ({id, itemName, price, itemImage}) => {
  return (
    <ItemContainer>
        <div>
            <img src={itemImage} alt={itemName} width="200" height="280" />
        </div>
        <div>ID: {id}</div>
        <div>{itemName}</div>
        <div>Cena: {price} $</div>
    </ItemContainer>
  )
}
