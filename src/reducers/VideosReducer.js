import {
  FETCH_VIDEOS,
  FILTER_VIDEOS,
  FETCH_VIDEO,
} from '../types';

const initialState = {
  data: [],
  search: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, data: action.payload.data, search: action.payload.search };
    case FETCH_VIDEO:
      return { ...state, data: action.payload };
    case FILTER_VIDEOS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
