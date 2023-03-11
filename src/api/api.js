import axios from 'axios';

export const getHotelsPosts = (name, checkIn, checkOut) => {
  return axios(
    `http://engine.hotellook.com/api/v2/cache.json?location=${name}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=6`,
  ).then((responce) => responce.data);
};
