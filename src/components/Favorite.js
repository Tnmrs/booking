import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { useSelector } from 'react-redux';
const Favorite = ({ rating }) => {
  const favoriteHotels = useSelector((state) => state.app.favoriteHotels);
  return (
    <div>
      {favoriteHotels.map((hotel) => (
        <div className="list-hotels">
          <div className="card-hotel">
            <div className="name-hotel">
              <span>{hotel.hotelName}</span>

              <img src="like.svg" alt="like" />
            </div>
            <div className="date">
              <span>28 June, 2020</span>
              <span>––</span>
              <span>1 день</span>
            </div>

            <div className="price">
              <Rating
                size={20}
                className="rating"
                ratingValue={rating}
                readonly
                initialValue={rating}
              />
              <p className="title-p">Price:</p>
              <p className="price-title">{hotel.priceAvg} ₽</p>
            </div>
          </div>
          <hr className="price-line" />
        </div>
      ))}
    </div>
  );
};

export default Favorite;
