import { GET_HOTELS_ERROR, GET_HOTELS_SUCCESS, GET_HOTELS_REQUESTED } from './actions';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import { getHotelsPosts } from '../api/api';

function* fetchHotels(action) {
  try {
    const response = yield call(
      getHotelsPosts,
      action.payload.name,
      action.payload.checkIn,
      action.payload.checkOut,
    );

    yield put({
      type: GET_HOTELS_SUCCESS,
      payload: {
        data: response,
      },
    });
  } catch (error) {
    yield put({
      type: GET_HOTELS_ERROR,
      payload: {
        message: error.message,
      },
    });
  }
}

export function* takeResponce() {
  yield takeLatest(GET_HOTELS_REQUESTED, fetchHotels);
}

export function* saga() {
  yield takeResponce();
}
