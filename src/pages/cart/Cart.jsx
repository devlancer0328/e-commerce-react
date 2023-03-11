import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { ITEMS } from '../../data/items';
import { Item } from '../shop/Item';

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className='wrapper'>
      <div>
        <h1>Cart Items:</h1>
      </div>
      <div>
        {ITEMS.map((item) => {
            if (cartItems[item.id] !== 0 ) {
              return <Item key={item.id} {...item} />
            }
        })}
      </div>
    </div>
  )
}
