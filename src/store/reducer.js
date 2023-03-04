import { ADD_TO_FAVORITES, GET_HOTELS_SUCCESS, REMOVE_FROM_FAVORITES } from './actions';

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

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteHotels: state.favoriteHotels.filter((hotel) => hotel !== action.payload),
      };
    default: {
      return state;
    }
  }
};
