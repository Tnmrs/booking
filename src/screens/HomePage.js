import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../auth.css';
import '../main.css';

import Slider from '../components/Slider';
import HotelCard from '../components/HotelCard';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GET_HOTELS_REQUESTED } from '../store/actions';

import Header from '../components/Header';
import InputBlock from '../components/InputBlock';
import Favorites from '../components/Favorites';

const HomePage = () => {
  const dispatch = useDispatch();

  const [searchHotel, setSearchHotel] = useState('Москва');
  const [checkInDate, setCheckInDate] = useState(new Date().toISOString().slice(0, 10));
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [checkOutDate, setCheckOutDate] = useState(tomorrow.toISOString().slice(0, 10));
  const [selectedCheckInDate, setSelectedCheckInDate] = useState(checkInDate);
  const [searchHotelValue, setSearchHotelValue] = useState('Москва'); //Город
  const [amountDays, setAmountDays] = useState(''); //дни

  const [sort, setSort] = useState('');
  const favoriteHotels = useSelector((state) => state.app.favoriteHotels);

  const handleClick = (e) => {
    e.preventDefault();

    setSelectedCheckInDate(checkInDate);
    setSearchHotelValue(searchHotel);
    setAmountDays(dateNumber);

    dispatch({
      type: GET_HOTELS_REQUESTED,
      payload: {
        name: searchHotel,
        checkIn: checkInDate,
        checkOut: checkOutDate,
      },
    });
  };

  const handleSearchChange = (e) => {
    setSearchHotel(e.target.value);
  };

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    const date = parseInt(e.target.value);
    const newCheckOutDate = new Date(checkInDate);
    newCheckOutDate.setDate(newCheckOutDate.getDate() + (date < 1 ? 1 : date));
    setCheckOutDate(newCheckOutDate.toISOString().slice(0, 10));
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const hotels = useSelector((state) => state.app.hotels);

  const dateNumber = (
    Math.round((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)) || ''
  ).toString();

  const currentDate = selectedCheckInDate
    ? new Date(selectedCheckInDate).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const handleSortByPrice = () => {
    setSort('price');
  };

  const handleSortByRating = () => {
    setSort('rating');
  };

  return (
    <div>
      <Header />
      <div class="container-page">
        <div className="lefts">
          <InputBlock
            searchHotel={searchHotel}
            handleSearchChange={handleSearchChange}
            checkInDate={checkInDate}
            handleCheckInChange={handleCheckInChange}
            dateNumber={dateNumber}
            handleCheckOutChange={handleCheckOutChange}
            handleClick={handleClick}
          />
          <div class="block block2">
            <div className="container-home-location">
              <div className="wrap-home-price">
                <div>
                  <div className="title-rating">
                    <span>Избранное</span>
                  </div>

                  <div className="sort">
                    <div>
                      <img
                        src="rating.svg"
                        alt=""
                        style={{ cursor: 'pointer' }}
                        onClick={handleSortByRating}
                      />
                    </div>
                    <div>
                      <img
                        src="price.svg"
                        alt=""
                        style={{ cursor: 'pointer' }}
                        onClick={handleSortByPrice}
                      />
                    </div>
                  </div>

                  <Favorites
                    checkOutDate={amountDays}
                    checkInDate={selectedCheckInDate}
                    favoriteHotels={favoriteHotels}
                    sort={sort}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rights">
          <div class="block block3">
            <div className="container-home-location">
              <div className="wrap-home-hotels">
                <div className="wraps">
                  <div className="wrap-left">
                    <span className="s-hotel">Отели</span>
                    <img src="right.svg" alt="" />
                    <span className="s-city">{searchHotelValue}</span>
                  </div>

                  <div className="wrap-right">
                    <span className="s-date">{currentDate}</span>
                  </div>
                </div>

                <div className="container-list-hotels">
                  <Slider />
                  <p className="title-hotels">Добавлено в Избранное 3 отеля</p>

                  <div className="container-card">
                    {hotels &&
                      hotels.map((hotel) => (
                        <div key={hotel.id}>
                          <HotelCard
                            isFavorite={isFavorite}
                            onClickFavorite={onClickFavorite}
                            hotel={hotel}
                            checkInDate={selectedCheckInDate}
                            checkOutDate={amountDays}
                            currentDate={currentDate}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
