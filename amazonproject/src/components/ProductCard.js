import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from './CurrencyFormat';
import './product.css'

function ProductCard({ products }) {
  const { image, title, id, rating, price } = products;

  return (
    <div className='card__container'>
      <a>
        <img src={image} alt=''/>
      </a>
      <div>
        <h3>{title}</h3>
        <div className='rating'>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} readOnly />
          {/* rating number */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price}/>
        </div>
        <button className='button'>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

