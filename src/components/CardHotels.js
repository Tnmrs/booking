import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../store/actions';
import { Rating } from 'react-simple-star-rating';

const CardHotels = ({ hotel, checkOutDate, currentDate }) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const [rating, setRating] = useState(hotel.stars);
  const favoriteHotels = useSelector((state) => state.app.favoriteHotels);

  const handleRating = (stars) => {
    setRating(stars);
  };

  const toggleFavorite = () => {
    if (isAdded) {
      setIsAdded(false);
      dispatch({
        type: REMOVE_FROM_FAVORITES,
        payload: hotel,
      });
    } else {
      setIsAdded(true);
      dispatch({
        type: ADD_TO_FAVORITES,
        payload: hotel,
      });
    }
  };
  useEffect(() => {
    if (favoriteHotels.some((favoriteHotel) => favoriteHotel.hotelId === hotel.hotelId)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [favoriteHotels, hotel.hotelId]);

  const hotelCardForm = (num) => {
    if (num % 10 === 1 && num % 100 !== 11) {
      return 'день';
    } else if ([2, 3, 4].includes(num % 10) && ![12, 13, 14].includes(num % 100)) {
      return 'дня';
    } else {
      return 'дней';
    }
  };

  return (
    <div className="hotel-list">
      <div className="hotel-list-block">
        <div className="hotel-card-left">
          <img src="haus.png" alt="" width={64} height={64} />
          <div className="hotel-list-card-title">
            <p className="hotel-list-title">{hotel.hotelName}</p>
            <div className="hotel-list-card-date">
              <p>{currentDate}</p>
              <p>-</p>
              <p>
                {checkOutDate} {hotelCardForm(checkOutDate)}
              </p>
            </div>
            <Rating
              size={20}
              className="rating"
              onClick={handleRating}
              ratingValue={rating}
              readonly
              initialValue={rating}
              fillColor="#CDBC1E"
            />
          </div>
        </div>

        <div className="hotel-card-right">
          <div className="hotel-card-fav-icon">
            <img onClick={toggleFavorite} src={isAdded ? '/like.svg' : '/likepng.svg'} />
          </div>

          <div className="hotel-card-price">
            <p>Price:</p>
            <h3>{hotel.priceAvg} ₽</h3>
          </div>
        </div>
      </div>
      <hr className="hotel-list-line" />
    </div>
  );
};

export default CardHotels;
