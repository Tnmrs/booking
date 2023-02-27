import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../auth.css';
import '../main.css';
import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import Slider from '../components/Slider';
import HotelCard from '../components/HotelCard';

const HomePage = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  // const [ratingValue, setRaingValue] = useState(0);
  // const handleRating = (rate: number) => {
  //   setRaingValue(rate);
  // };

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
                      <input className="input" type="text" name="city" placeholder="Город" />
                    </div>
                  </div>
                  <div className="m-t-20">
                    <span className="title-form-home">Дата заселения </span>
                    <div className="wrap-input-home validate-input">
                      <input className="input" type="date" />
                    </div>
                  </div>
                  <div className="p-t-32 p-b-9 ">
                    <span className="title-form-home">Количество дней </span>
                    <div className="wrap-input-home validate-input">
                      <input className="input" type="text" />
                    </div>
                  </div>

                  <div class="container-btn">
                    <button class="form-btn-home" type="submit">
                      Найти
                    </button>
                  </div>
                </form>
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

                      <img src="like.svg" alt="like" style={{ cursor: 'pointer' }} />
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

                      <img
                        src="like.svg"
                        alt="like"
                        style={{ cursor: 'pointer' }}
                        onClick={onClickFavorite}
                      />
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

                      <img src="like.svg" alt="like" style={{ cursor: 'pointer' }} />
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
                    <span className="s-date">07 июля 2020</span>
                  </div>
                </div>

                <div className="container-list-hotels">
                  <Slider />
                  <p className="title-hotels">Добавлено в Избранное 3 отеля</p>
                  <div className="container-card">
                    <div>
                      <HotelCard isFavorite={isFavorite} onClickFavorite={onClickFavorite} />
                    </div>
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
