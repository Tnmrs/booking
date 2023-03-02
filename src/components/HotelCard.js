import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const HotelCard = ({ isFavorite, onClickFavorite, hotel, checkInDate, checkOutDate }) => {
  const currentDate = new Date(checkInDate).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div>
      <div className="card-hotels">
        <div className="card-left">
          <img src="Ellipse.png" alt="" width={64} height={64} />

          <div className="hotel-info">
            <ul>
              <li>{hotel.hotelName}</li>
            </ul>
            <ul style={{ display: 'flex' }}>
              <p>{currentDate}</p>
              <p>––{checkOutDate} день</p>
            </ul>

            <Rating size={20} className="rating" />
          </div>
        </div>
        <div className="card-right">
          <img onClick={onClickFavorite} src={isFavorite ? '/like.svg' : '/likepng.svg'} />
          <ul className="price-info">
            <p>Price:</p>
            <li>{hotel.priceAvg} ₽</li>
          </ul>
        </div>
      </div>
      <hr className="price-line" />
    </div>
  );
};

export default HotelCard;
