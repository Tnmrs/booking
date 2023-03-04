import React from 'react';

const InputBlock = ({
  searchHotel,
  handleSearchChange,
  checkInDate,
  handleCheckInChange,
  dateNumber,
  handleCheckOutChange,
  handleClick,
}) => {
  return (
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
                  type="text"
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
  );
};

export default InputBlock;
