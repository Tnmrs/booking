import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../store/actions';
import { Rating } from 'react-simple-star-rating';

const HotelCard = ({ hotel, checkOutDate, currentDate }) => {
  const dispatch = useDispatch();

  const [isAdded, setIsAdded] = useState(false);

  const [rating, setRating] = useState(hotel.stars);

  const handleRating = (stars) => {
    setRating(stars);
  };

  const toogleFavorite = () => {
    setIsAdded(!isAdded);
    dispatch({
      type: isAdded ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES,
      payload: hotel,
    });
  };

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

            <Rating
              size={20}
              className="rating"
              onClick={handleRating}
              ratingValue={rating}
              readonly
              initialValue={rating}
            />
          </div>
        </div>
        <div className="card-right">
          <img onClick={toogleFavorite} src={isAdded ? '/like.svg' : '/likepng.svg'} />
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
