import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../auth.css';
import '../main.css';
import Slider from '../components/Slider';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_HOTELS_REQUESTED } from '../store/actions';
import { useEffect } from 'react';
import Header from '../components/Header';
import Favorites from '../components/Favorites';
import CardHotels from '../components/CardHotels';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_HOTELS_REQUESTED,
      payload: {
        name: 'Москва',
        checkIn: new Date().toISOString().slice(0, 10),
        checkOut: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000)
          .toISOString()
          .slice(0, 10),
      },
    });
  }, [dispatch]);

  const [sortByRating, setSortByRating] = useState(true);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [searchHotel, setSearchHotel] = useState('Москва');
  const [checkInDate, setCheckInDate] = useState(new Date().toISOString().slice(0, 10));
  const [amountDays, setAmountDays] = useState(1); //дни

  const [selectedCheckInDate, setSelectedCheckInDate] = useState(checkInDate);
  const [searchHotelValue, setSearchHotelValue] = useState('Москва'); //Город
  const [dateNumberOf, setDateNumberOf] = useState('');

  const [sort, setSort] = useState('');
  const favoriteHotels = useSelector((state) => state.app.favoriteHotels);

  const handleClick = (e) => {
    e.preventDefault();

    setSelectedCheckInDate(checkInDate);
    setSearchHotelValue(searchHotel);
    setDateNumberOf(amountDays);

    const checkOutDate = new Date(
      new Date(checkInDate).getTime() + (Number(amountDays) - 1) * 24 * 60 * 60 * 1000,
    )
      .toISOString()
      .slice(0, 10);

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
    setAmountDays(e.target.value);
  };
  const [isFavorite, setIsFavorite] = useState(false);
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const numFavorites = favoriteHotels.length;
  const hotelWordForm = (num) => {
    if (num % 10 === 1 && num % 100 !== 11) {
      return 'отель';
    } else if ([2, 3, 4].includes(num % 10) && ![12, 13, 14].includes(num % 100)) {
      return 'отеля';
    } else {
      return 'отелей';
    }
  };

  const hotels = useSelector((state) => state.app.hotels);

  const currentDate = selectedCheckInDate
    ? new Date(selectedCheckInDate).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const handleSortByPrice = () => {
    setSortByRating(false);
    setSortByPrice(true);
    setSort('price');
  };

  const handleSortByRating = () => {
    setSort('rating');
    setSortByRating(true);
    setSortByPrice(false);
  };

  const date = new Date(
    new Date(checkInDate).getTime() + (Number(amountDays) - 1) * 24 * 60 * 60 * 1000,
  )
    .toISOString()
    .slice(0, 10);

  return (
    <div>
      <Header />
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
                        id="style"
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
                        id="style"
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
                        id="style"
                        min="1"
                        max="100"
                        maxLength="3"
                        value={amountDays}
                        onKeyPress={(event) => {
                          if (event.target.value.length >= 2) {
                            event.preventDefault();
                          }
                        }}
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
                <div>
                  <div className="title-rating">
                    <span>Избранное</span>
                  </div>

                  <div className="sort">
                    <div>
                      <img
                        className="rating-image"
                        src={sortByRating ? 'rating-active.svg' : 'rating-notactive.svg'}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        onClick={handleSortByRating}
                      />
                    </div>
                    <div>
                      <img
                        className="price-image"
                        src={sortByPrice ? 'price-active.svg' : 'price-notactive.svg'}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        onClick={handleSortByPrice}
                      />
                    </div>
                  </div>

                  <Favorites
                    checkOutDate={dateNumberOf}
                    checkInDate={selectedCheckInDate}
                    favoriteHotels={favoriteHotels}
                    sort={sort}
                    currentDate={currentDate}
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
                  <p className="title-hotels">
                    Добавлено в Избранное: <b>{numFavorites}</b> {hotelWordForm(numFavorites)}
                  </p>

                  <div className="container-card">
                    {hotels &&
                      hotels.map((hotel) => (
                        <div key={hotel.id}>
                          <CardHotels
                            isFavorite={isFavorite}
                            onClickFavorite={onClickFavorite}
                            hotel={hotel}
                            checkInDate={selectedCheckInDate}
                            checkOutDate={dateNumberOf}
                            currentDate={currentDate}
                            hotelWordForm={hotelWordForm}
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
