import React from 'react';
import './Item.css'

const Item = ({id, name, type, price, numberAvailable}) => {
  return (
    <div className='item'>
      <h3>{name}</h3>
      <h4>{type}</h4>
      <p>{price}</p>
      <p>{numberAvailable}</p>
    </div>
  )
}

export default Item;

      // inventory: [{ id: 18907224, name: 'Rope', type: 'toy', price: 14.99, numberAvailable: 3 }]
