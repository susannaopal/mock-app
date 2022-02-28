import React from 'react';
import Item from './Item.js';
import './ItemsContainer.css'


const ItemsContainer = ({items}) => {
  const newItem = items.map((item) => {
    return (
      <Item
      id={item.id}
      key={item.id}
      name={item.name}
      type={item.type}
      price={item.price}
      numberAvailable={item.numberAvailable}
    />
    )
  })
    return (
    <div className='item-container'>
      {newItem}
    </div>
    )
}

export default ItemsContainer;

