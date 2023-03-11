import React, { useMemo } from 'react';
import CardFavorite from './CardFavorite';

const Favorites = ({ checkOutDate, favoriteHotels, sort, currentDate }) => {
  const sortedHotels = useMemo(() => {
    if (sort === 'price') {
      return favoriteHotels.slice().sort((a, b) => a.priceFrom - b.priceFrom);
    } else if (sort === 'rating') {
      return favoriteHotels.slice().sort((a, b) => b.stars - a.stars);
    } else {
      return favoriteHotels;
    }
  }, [favoriteHotels, sort]);

  return (
    <div>
      {sortedHotels.map((hotel) => (
        <CardFavorite
          key={hotel.hotelId}
          hotel={hotel}
          checkOutDate={checkOutDate}
          rating={hotel.stars}
          currentDate={currentDate}
        />
      ))}
    </div>
  );
};

export default Favorites;
