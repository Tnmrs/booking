import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../store/actions';
import { Rating } from 'react-simple-star-rating';

const HotelCard = ({ hotel, checkOutDate, currentDate, hotelWordForm }) => {
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
              <p>
                ––{checkOutDate} {hotelCardForm(checkOutDate)}
              </p>
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
          <img onClick={toggleFavorite} src={isAdded ? '/like.svg' : '/likepng.svg'} />
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
