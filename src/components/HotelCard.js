import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

import { useDispatch } from 'react-redux';
import { GET_HOTELS_REQUESTED } from '../store/actions';

const HotelCard = ({ name, date, price, isFavorite, onClickFavorite }) => {
  return (
    <div>
      <div className="card-hotels">
        <div className="card-left">
          <img src="Ellipse.png" alt="" width={64} height={64} />

          <div className="hotel-info">
            <ul>
              <li>{name}</li>
            </ul>
            <p>28 June, 2020––1 день</p>
            <Rating size={20} className="rating" />
          </div>
        </div>
        <div className="card-right">
          <img
            style={{ cursor: 'pointer' }}
            onClick={onClickFavorite}
            src={isFavorite ? '/like.svg' : '/likepng.svg'}
          />
          <ul className="price-info">
            <p>Price:</p>
            <li>2342342</li>
          </ul>
        </div>
      </div>
      <hr className="price-line" />
    </div>
  );
};

export default HotelCard;
