import { ADD_TO_FAVORITES, GET_HOTELS_SUCCESS } from './actions';

export const reducer = (
  state = {
    hotels: [],
    favoriteHotels: [],
  },
  action,
) => {
  switch (action.type) {
    case GET_HOTELS_SUCCESS: {
      const hotels = action.payload.data;
      return {
        ...state,
        hotels,
      };
    }

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels, action.payload],
      };
    default: {
      return state;
    }
  }
};
