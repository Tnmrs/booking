import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../auth.css';
import '../main.css';

import { Rating } from 'react-simple-star-rating';
import Slider from '../components/Slider';
import HotelCard from '../components/HotelCard';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GET_HOTELS_REQUESTED } from '../store/actions';

const HomePage = () => {
  const dispatch = useDispatch();

  const [searchHotel, setSearchHotel] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [selectedCheckInDate, setSelectedCheckInDate] = useState(checkInDate);

  const handleClick = (e) => {
    e.preventDefault();

    setSelectedCheckInDate(checkInDate);
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

  // const [ratingValue, setRaingValue] = useState(0);
  // const handleRating = (rate: number) => {
  //   setRaingValue(rate);
  // };

  const hotels = useSelector((state) => state.app.hotels);
  const dateNumber =
    Math.round((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)) || '';

  const currentDate = selectedCheckInDate
    ? new Date(selectedCheckInDate).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  return (
    <div>
      <div className="header">
        <nav className="nav">
          <ul>
            <li className="logo-name">Simple Hotel Check</li>
          </ul>
          <ul className="right">
            <li>Выйти</li>
            <img src="exit.svg" alt="exit" />
          </ul>
        </nav>
      </div>
      <div class="container-page">
        <div className="lefts">
          <div class="block block1">
            <div className="container-home-location">
              <div className="wrap-home ">
                <form class="form validate-form ">
                  <div className="p-t-32 p-b-9 ">
                    <span className="title-form-home ">Локация</span>
                    <div className="wrap-input-home validate-input">
                      <input
                        className="input"
                        type="text"
                        value={searchHotel}
                        onChange={handleSearchChange}
                      />
                    </div>
                  </div>
                  <div className="m-t-20">
                    <span className="title-form-home">Дата заселения </span>
                    <div className="wrap-input-home validate-input">
                      <input
                        className="input"
                        type="date"
                        value={checkInDate}
                        onChange={handleCheckInChange}
                        min={new Date().toISOString().slice(0, 10)}
                      />
                    </div>
                  </div>
                  <div className="p-t-32 p-b-9 ">
                    <span className="title-form-home">Количество дней </span>
                    <div className="wrap-input-home validate-input">
                      <input
                        className="input"
                        type="number"
                        value={dateNumber}
                        onChange={handleCheckOutChange}
                      />
                    </div>
                  </div>
                </form>
                <div class="container-btn">
                  <button class="form-btn-home" onClick={handleClick}>
                    Найти
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="block block2">
            <div className="container-home-location">
              <div className="wrap-home-price">
                <div className="title-rating">
                  <span>Избранное</span>
                </div>
                <div className="sort">
                  <div>
                    <button>Рейтинг</button>
                  </div>
                  <div>
                    <button>Цена</button>
                  </div>
                </div>

                <div className="list-hotels">
                  <div className="card-hotel">
                    <div className="name-hotel">
                      <span>Moscow Marriott Grand Hotel</span>

                      <img src="like.svg" alt="like" />
                    </div>
                    <div className="date">
                      <span>28 June, 2020</span>
                      <span>––</span>
                      <span>1 день</span>
                    </div>

                    <div className="price">
                      <Rating size={20} className="rating" />
                      <p className="title-p">Price:</p>
                      <p className="price-title">23 924 ₽</p>
                    </div>
                  </div>
                  <hr className="price-line" />

                  <div className="card-hotel">
                    <div className="name-hotel">
                      <span>Moscow Marriott Grand Hotel</span>

                      <img src="like.svg" alt="like" onClick={onClickFavorite} />
                    </div>
                    <div className="date">
                      <span>28 June, 2020</span>
                      <span>––</span>
                      <span>1 день</span>
                    </div>

                    <div className="price">
                      <Rating size={20} className="rating" />
                      <p className="title-p">Price:</p>
                      <p className="price-title">23 924 ₽</p>
                    </div>
                  </div>
                  <hr className="price-line" />

                  <div className="card-hotel">
                    <div className="name-hotel">
                      <span>Moscow Marriott Grand Hotel</span>

                      <img src="like.svg" alt="like" />
                    </div>
                    <div className="date">
                      <span>{checkInDate}</span>
                      <span>––</span>
                      <span>1 день</span>
                    </div>

                    <div className="price">
                      <Rating size={20} className="rating" />
                      <p className="title-p">Price:</p>
                      <p className="price-title">23 924 ₽</p>
                    </div>
                  </div>
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
                    <span className="s-city">Название города</span>
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
