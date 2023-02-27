import { GET_HOTELS_SUCCESS } from './actions';

export const reducer = (
  state = {
    hotels: null,
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
    default: {
      return state;
    }
  }
};
